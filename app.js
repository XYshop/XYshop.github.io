const form = document.querySelector('form');
const valid = form.querySelector('#valid');
const dialog = document.querySelector('.dialog');
const dismiss = dialog.querySelector('button');
const yours = dialog.querySelector('strong');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target).entries();
  const { email } = Object.fromEntries(formData);

  const message = validateEmail(email);

  if (!message) {
    valid.innerText = '';
    form.email.classList.remove('error');
    console.log(dialog.classList);
    dialog.classList.add('show');
    yours.innerText = email + '.';
    return;
  }

  valid.innerText = 'Valid email required';
  form.email.classList.add('error');
});

function validateEmail(email) {
  if (!email) return 'Email is required';

  const isValidEmail = /^\S+@\S+$/g;
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }

  return '';
}

dismiss.addEventListener('click', () => {
  dialog.classList.remove('show');
});
