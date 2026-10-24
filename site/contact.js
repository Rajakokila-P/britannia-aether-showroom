const contactForm = document.querySelector('#contact-form');
const contactDraft = document.querySelector('#contact-draft');
const contactStatus = document.querySelector('#contact-status');

contactForm.addEventListener('input', () => {
  contactDraft.hidden = true;
  contactDraft.removeAttribute('href');
  contactStatus.textContent = '';
});

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;
  const name = contactForm.elements.name.value.trim();
  const email = contactForm.elements.email.value.trim();
  const message = contactForm.elements.message.value.trim();
  if (!name || !message) {
    contactStatus.textContent = 'Please enter your name and a message.';
    return;
  }
  const body = `Name: ${name}\r\nReply email: ${email}\r\n\r\n${message}`;
  contactDraft.href = `mailto:spraja110880.rk@gmail.com?subject=${encodeURIComponent('Britannia Aether project enquiry')}&body=${encodeURIComponent(body)}`;
  contactDraft.hidden = false;
  contactStatus.textContent = 'Your draft is ready. Nothing has been sent. Open the email draft below, then press Send in your email app.';
});
