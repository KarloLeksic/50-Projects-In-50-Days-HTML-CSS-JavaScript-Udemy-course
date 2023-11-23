const password = document.querySelector('#password');
const background = document.querySelector('#background');

password.addEventListener('input', e => {
  const { value } = e.target;
  const length = value.length;

  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});