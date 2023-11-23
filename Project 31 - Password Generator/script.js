const resultEl = document.querySelector('#result');
const lengthEl = document.querySelector('#length');
const uppercaseEl = document.querySelector('#uppercase');
const lowercaseEl = document.querySelector('#lowercase');
const numbersEl = document.querySelector('#numbers');
const symbolsEl = document.querySelector('#symbols');
const generateEl = document.querySelector('#generate');
const clipboardEl = document.querySelector('#clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
  // Kod iz tutorijala za kopiranje u clipboard
  /*
  const textarea = document.createElement('textarea');
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  */

  // MOJ KOD ZA KOPIRANJE U CLIPBOARD
  navigator.clipboard.writeText(resultEl.innerText);
  
  
  alert('Password copied to clipboard');

});

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*()[]=<>*,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;

  if (typesCount === 0) {
    return '';
  }

  // Ovo nam kreira objekt samo sa onim postavkama koje se oznacene
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  // MOJ KOD ZA GENERIRANJE LOZINKE
  for (let i = 0; i < length; i++) {
    generatedPassword += randomFunc[Object.keys(typesArray[Math.floor(Math.random() * typesArray.length)])[0]]();
  }

  /*
    // Orginal kod za generiranje lozinke
    for (let i = 0; i < length; i += typesCount) {
      typesArray.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
      });
    }
  
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
  */

  return generatedPassword;
}