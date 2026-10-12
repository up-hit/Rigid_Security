(() => {
  const key = 'rigid-cookie-notice-v1';
  let accepted = false;
  try { accepted = localStorage.getItem(key) === 'accepted'; } catch (_) {}
  if (accepted) return;
  const bar = document.createElement('section');
  bar.className = 'cookie-banner';
  bar.setAttribute('aria-label', 'Cookie information');
  bar.innerHTML = `<div><strong>Your privacy matters</strong><p>We do not use advertising or analytics cookies. Click Accept cookies to remember that you have read this notice on this device. <a href="cookie-policy.html">Read our cookie policy</a>.</p></div><button type="button" class="button">Accept cookies</button>`;
  bar.querySelector('button').addEventListener('click', () => {
    try { localStorage.setItem(key, 'accepted'); } catch (_) {}
    bar.remove();
  });
  document.body.appendChild(bar);
})();
