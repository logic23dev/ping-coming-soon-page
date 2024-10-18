const form = document.querySelector('#form');
const email = document.querySelector('#email');
const emailError = document.querySelector('#email-error');

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', event => {
  event.preventDefault();

  emailError.textContent = '';
  email.setAttribute('aria-invalid', 'false');

  if (email.value.length === 0 || !emailRegExp.test(email.value)) {
    emailError.textContent = 'Please provide a valid email address';
    email.setAttribute('aria-invalid', 'true');
    email.className = 'error-border';
  } else {
    form.submit();
    alert('Form submitted successfully!');
  }
});
