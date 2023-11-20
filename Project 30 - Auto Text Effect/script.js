const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const text = 'We Love Programming!';
let idx = 1;
// Moze i neki normalni broj, samo je onda obrnuto proporcionalno
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if(idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener('input', e => {
  speed = 300 / e.target.value;
});