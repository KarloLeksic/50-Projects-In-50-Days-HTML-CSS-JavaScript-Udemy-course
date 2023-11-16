const buttons = document.querySelectorAll('.ripple');

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    // Moramo dobiti kordinate gdje smo tocno kliknuli, ali to su kordinate od cijele stranice, nisu kordinate unutar gumba
    const x = e.clientX;
    const y = e.clientY;

    // Kordinate butona na stranici
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Kordinate unutar gumba
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Dodavanje spana unutar buttona
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    this.appendChild(circle);

    // Moramo ga maknuti iz DOM-a jer bi se gomilali bezveze kad nebi micali te krugove
    setTimeout(() => {
      circle.remove();
    }, 500);
  });
});