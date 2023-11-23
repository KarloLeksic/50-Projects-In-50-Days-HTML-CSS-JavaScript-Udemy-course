const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function resetDOM () {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach(num => {
    num.classList.value = '';
  });

  nums[0].classList.add('in');
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    // Listener na kraj animacije
    num.addEventListener('animationend', e => {
      // Ako je animacija za ulazak bila i ima jos do kraja
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in');
        num.classList.add('out');
      } 
      // Ako je animacija bila za kraj i postoji sljedeci
      else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // Dodajemo in animaciju na sljedeceg rodaka
        num.nextElementSibling.classList.add('in');
      } else {
        // Zavrsavamo brojanje i rikazujemo zavrsni ekran
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    });
  });
}

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});