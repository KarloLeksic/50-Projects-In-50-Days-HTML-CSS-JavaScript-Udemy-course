const tagsEl = document.querySelector('#tags');
const textarea = document.querySelector('#textarea');

// Da odma upisujemo u textareu bez pritiska na nju
textarea.focus();

// Listener kada pustimo tipku
textarea.addEventListener('keyup', e => {
  createTags(e.target.value);

  // Na enter zelimo da se pokrene generator
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  // Ovo razdvaja svaku rijec odvjenu zarezom i uklanja razmake na kraju i pocetku
  const tags = input.split(',').filter(tag => tag.trim()).map(tag => tag.trim());

  tagsEl.innerHTML = '';

  // Dodavane samo u tags div
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

// Selektiranje random taga
function randomSelect() {
  // 30 puta da odabire
  const times = 30;

  // Delay izmedu odabira
  const delay = 100;

  // Postavimo interval da svakih 100ms odabere drugi tag i da ga poboja
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    // Isti taj za 100ms ugasiti, i automatski se odabire neki drugi
    setTimeout(() => {
      unhighlightTag(randomTag)
    }, delay);
  }, delay);

  // Ovo samo radi odgodu u trajanju 30 * 100 jer zelimo da 30 puta biramo
  setTimeout(() => {
    // Prekinemo gornje izvrsavanje svakih 100ms
    clearInterval(interval);

    // Postavljanje zadnjeg koji ce ostati
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, delay);
  }, times * delay);
}

// OVa funkcija uzme jedan od tagova koje smo napisali
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  const randomTag = tags[Math.floor(Math.random() * tags.length)];
  return randomTag;
}

// Ovo ga samo boja
function highlightTag(tag) {
  tag.classList.add('highlight');
}

// Ovo mice boju da bude ko svi drugi
function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
