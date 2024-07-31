const wrapper = document.querySelector('.footer');
const btn = wrapper.querySelector('button');
const share = wrapper.querySelector('.user-info');
const shareTo = wrapper.querySelector('.share-to');

btn.addEventListener('click', (e) => {
  e.stopPropagation();
  wrapper.classList.toggle('share');
});

document.addEventListener('click', (e) => {
  if (!e.target.contains(btn)) return;
  wrapper.classList.remove('share');
});
