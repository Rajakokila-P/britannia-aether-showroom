from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

root = Path(__file__).resolve().parents[1] / 'site'
errors = []

class Document(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = set()
        self.links = []
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            if attrs['id'] in self.ids:
                errors.append('Duplicate ID: ' + attrs['id'])
            self.ids.add(attrs['id'])
        for key in ('src', 'href'):
            if key in attrs:
                self.links.append(attrs[key])

docs = {p.name: Document(p.read_text(encoding='utf-8')) for p in root.glob('*.html')}
for name, doc in docs.items():
    for link in doc.links:
        url = urlsplit(link)
        if url.scheme or url.netloc:
            continue
        target = root / unquote(url.path or name)
        if not target.is_file():
            errors.append(f'{name}: missing file {link}')
        if url.fragment and target.name in docs and unquote(url.fragment) not in docs[target.name].ids:
            errors.append(f'{name}: missing fragment {link}')
home = (root / 'index.html').read_text(encoding='utf-8')
legal = (root / 'legal.html').read_text(encoding='utf-8')
for label in ('Facebook', 'Instagram', 'YouTube', 'X'):
    if f'<span>{label}</span>' not in home:
        errors.append('Missing non-linked social label: ' + label)
if 'tel:' in home:
    errors.append('Sample phone must not be callable')
if legal.count('https://www.gov.uk/') < 7:
    errors.append('Missing legal references')
if errors:
    raise SystemExit('\n'.join(errors))
print('PASS: internal HTML references, fragments, IDs, social placeholders and legal references')
