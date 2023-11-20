const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLenght = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

// Na desnoj strani se pokazuje prva slika

// Na ljevoj se pokazuje zadnja slika i to s ovime definiramo
slideLeft.style.top = `-${(slidesLenght - 1) * 100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
  // Dobivamo visinu jedne slike jel nam ona ovisi o velicini ekrana
  const sliderHeight = sliderContainer.clientHeight;
  
  // Povecavanje i smanjivanje aktivnog slajda sa provjerama da ne odemo u minus i preko na drugu stranu
  if(direction === 'up') {
    activeSlideIndex++;
    if(activeSlideIndex > slidesLenght - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLenght - 1;
    }
  }

  // Slike su kao spojene, ali se samo jedna vidi
  // Translatiranjem nastimavamo da se samo jedna vidi
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}