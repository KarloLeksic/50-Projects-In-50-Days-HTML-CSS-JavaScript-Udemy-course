const boxes = document.querySelectorAll('.box');

// Mora reagirati na scroll
window.addEventListener('scroll', checkBoxes);

// Automatski prikaze koliko ih stane na ekran
checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  // Za svaki box gledamo kolko je odozgo udaljen
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    // Provjeravamo jel ga treba prikazat ili maknut
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}