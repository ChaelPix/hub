export function contactEmail() {
  return String.fromCharCode(
    116, 114, 97, 105, 97, 110, 46, 98, 101, 97, 117, 106, 97, 114, 100,
    64, 103, 109, 97, 105, 108, 46, 99, 111, 109
  );
}

export function setupContactEmail() {
  const email = contactEmail();
  document.querySelectorAll('[data-contact-label]').forEach(label => {
    label.textContent = email;
  });
}
