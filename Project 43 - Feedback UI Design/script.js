const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

// Event bubbling
ratingsContainer.addEventListener('click', (e) => {
  // Iz nekog glupog razloga on zeli na sliku da se mora kliknuti za odabir
  // Ja bi recimo stavio na cjelo to podrucje sa klasom rating
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener('click', e => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}