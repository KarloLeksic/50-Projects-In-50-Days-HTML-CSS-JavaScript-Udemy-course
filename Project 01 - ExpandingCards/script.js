// Dohvatiti sve panele
const panels = document.querySelectorAll('.panel');

// Idemo kroz svaki panel
panels.forEach((panel) => {
  // Dodajemo event listener na svaki kad se klikne
  panel.addEventListener('click', () => {
    // Ukloniti active klasu
    removeActiveClasses();

    // Dodavanje active klase
    panel.classList.add('active');
  });
});

// Funkcija koja uklanja active klasu sa svih
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
