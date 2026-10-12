const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));
document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click', () => { document.querySelector('#service').value = a.dataset.service; }));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#enquiry-form').addEventListener('submit', event => {
 event.preventDefault();
 const form = event.currentTarget;
 if (!form.reportValidity()) return;
 const data = new FormData(form);
 const body = Array.from(data, ([key, value]) => `${key}: ${value}`).join('\r\n\r\n');
 const subject = `Rigid Security enquiry — ${data.get('Service required')}`;
 window.location.href = `mailto:admin@rigidsecurity.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 document.querySelector('#form-status').textContent = 'Your email app should open with your enquiry. Please send the email there to complete your request. If it does not open, email admin@rigidsecurity.co.uk or call our team.';
});
