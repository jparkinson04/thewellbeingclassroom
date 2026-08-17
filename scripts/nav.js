/* Mobile nav toggle — the only JavaScript on the site.
   Keyboard-accessible: real <button>, aria-expanded state,
   Escape closes the menu and returns focus to the button. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  function setOpen(open) {
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  /* Close after choosing a link (matters for same-page anchors) */
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();

/* Workshops catalogue: on phones, start with only the first category open.
   Without JS, all categories simply stay open. */
if (window.matchMedia('(max-width: 680px)').matches) {
  document.querySelectorAll('details.cat-group').forEach(function (d, i) {
    if (i > 0) d.removeAttribute('open');
  });
}

/* Enquiry form: composes a ready-written email in the visitor's mail app.
   PLACEHOLDER address; replace with a form service action when confirmed. */
var enquiry = document.getElementById('enquiry-form');
if (enquiry) {
  enquiry.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = function (n) { return (enquiry.elements[n].value || '').trim(); };
    var subject = 'Enquiry from ' + v('name') + (v('school') ? ', ' + v('school') : '');
    var body = ['Name: ' + v('name'), 'School or trust: ' + v('school'),
      'Email: ' + v('email'), 'Phone: ' + v('phone'),
      'Interested in: ' + v('interest'), '', v('message')].join('\n');
    window.location.href = 'mailto:hello@thewellbeingclassroom.uk?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
}
