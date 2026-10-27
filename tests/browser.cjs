// Development-only browser acceptance tests. Does not send emails or navigate externally.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const { chromium } = require('playwright');
const root = path.resolve(__dirname, '../site');
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, bytes) => {
    if (err) { res.writeHead(404); return res.end(); }
    const types = {'.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.webp':'image/webp', '.svg':'image/svg+xml'};
    res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
    res.end(bytes);
  });
});
(async () => {
  let browser;
  let passed = 0;
  const ok = name => { passed++; console.log('PASS:', name); };
  try {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const base = `http://127.0.0.1:${server.address().port}`;
    browser = await chromium.launch({headless: true, ...(process.env.CHROMIUM_PATH ? {executablePath:process.env.CHROMIUM_PATH} : {})});
    const page = await browser.newPage({acceptDownloads:true});
    const errors = [];
    const external = [];
    page.on('pageerror', e => errors.push(e.message));
    await page.route('**/*', route => {
      if (route.request().url().startsWith(base)) return route.continue();
      external.push(route.request().url());
      return route.abort();
    });
    await page.goto(base);
    assert.equal(await page.locator('.car').count(), 4);
    for (const [filter, names] of Object.entries({performance:['Aether Sport','Albion Phoenix'],luxury:['Windsor Halo'],exploration:['Nomad'],all:['Aether Sport','Windsor Halo','Nomad','Albion Phoenix']})) {
      await page.locator(`[data-filter="${filter}"]`).click();
      assert.deepEqual(await page.locator('.car:visible h3').allTextContents(), names);
      assert.equal(await page.locator('#filter-status').textContent(), `${names.length} editions displayed`);
      assert.equal(await page.locator(`[data-filter="${filter}"]`).getAttribute('aria-pressed'), 'true');
    }
    ok('R1 exact model filter results and announced counts');
    for (const [id, name] of Object.entries({sport:'Aether Sport',windsor:'Windsor Halo',nomad:'Nomad',phoenix:'Albion Phoenix'})) {
      await page.locator(`[data-model="${id}"]`).click();
      assert.equal(await page.locator('#model-details h2').textContent(), name);
      await page.keyboard.press('Escape');
      assert.equal(await page.locator('#model-dialog').isVisible(), false);
    }
    await page.locator('[data-model="nomad"]').click();
    await page.locator('#configure-model').click();
    assert.equal(await page.locator('#edition').inputValue(), 'nomad');
    assert.equal(await page.locator('#edition').evaluate(el => el === document.activeElement), true);
    await page.locator('[data-model="sport"]').click();
    await page.locator('#close-dialog').click();
    assert.equal(await page.locator('#model-dialog').isVisible(), false);
    ok('R2 all model dialogs, Escape, close and Personalise focus');
    for (const [key, heading] of Object.entries({ride:'Composure, reimagined.',connect:'A journey, connected.',cabin:'A cabin that listens.'})) {
      await page.locator(`[data-tech="${key}"]`).click();
      assert.equal(await page.locator('#tech-content h3').textContent(), heading);
      assert.equal(await page.locator('[data-tech][aria-pressed="true"]').count(), 1);
    }
    ok('R3 technology panel text and selected state');
    await page.locator('#edition').selectOption('nomad');
    await page.locator('[name="mood"][value="Focused"]').check();
    assert.match(await page.locator('#config-summary').textContent(), /Nomad.*Focused/);
    const [download] = await Promise.all([page.waitForEvent('download'), page.locator('#config-form button[type="submit"]').click()]);
    assert.equal(download.suggestedFilename(), 'Britannia-Aether-nomad-concept.txt');
    const text = fs.readFileSync(await download.path(), 'utf8');
    for (const expected of ['Edition: Nomad','Cabin mood: Focused','Not a purchase, reservation or quotation.','No pricing, availability, road approval']) assert.ok(text.includes(expected), expected);
    ok('R4 configured download contents and filename');
    for (const route of ['/', '/showroom.html', '/portfolio.html']) {
      await page.goto(base + route);
      const draft = page.locator('#contact-draft');
      await page.locator('#contact-form button[type="submit"]').click();
      assert.equal(await draft.isVisible(), false);
      await page.locator('#contact-name').fill('Test & Example');
      await page.locator('#contact-email').fill('invalid');
      await page.locator('#contact-message').fill('Question');
      await page.locator('#contact-form button[type="submit"]').click();
      assert.equal(await draft.isVisible(), false);
      await page.locator('#contact-email').fill('test@example.com');
      await page.locator('#contact-message').fill('   ');
      await page.locator('#contact-form button[type="submit"]').click();
      assert.equal(await draft.isVisible(), false);
      assert.match(await page.locator('#contact-status').textContent(), /name and a message/);
      await page.locator('#contact-message').fill('Question & details + 100%\nSecond line');
      await page.locator('#contact-form button[type="submit"]').click();
      assert.equal(await draft.isVisible(), true);
      const mail = new URL(await draft.getAttribute('href'));
      assert.equal(mail.protocol, 'mailto:');
      assert.equal(mail.pathname, 'spraja110880.rk@gmail.com');
      assert.equal(mail.searchParams.get('subject'), 'Britannia Aether project enquiry');
      assert.ok(mail.searchParams.get('body').includes('Question & details + 100%\nSecond line'));
      assert.match(await page.locator('#contact-status').textContent(), /Nothing has been sent/);
      await page.locator('#contact-message').fill('Changed');
      assert.equal(await draft.isVisible(), false);
      assert.equal(await draft.getAttribute('href'), null);
    }
    ok('R5 all contact pages: required/invalid/whitespace inputs, URL encoding and draft invalidation');
    for (const route of ['/', '/showroom.html','/portfolio.html','/showroom-case-study.html','/legal.html']) {
      for (const width of [390,768,1440]) {
        await page.setViewportSize({width,height:900});
        await page.goto(base + route);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route} overflows at ${width}`);
      }
    }
    ok('R7 five pages at three viewport widths: no document overflow');
    assert.deepEqual(errors, []);
    assert.deepEqual(external, []);
    ok('No page JavaScript errors or external network requests during tested journeys');
    console.log(`PASS: ${passed} acceptance groups`);
  } finally {
    if (browser) await browser.close();
    await new Promise(resolve => server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
