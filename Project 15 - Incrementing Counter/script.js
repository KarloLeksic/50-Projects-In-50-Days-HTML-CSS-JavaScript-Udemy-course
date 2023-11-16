const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    // Ovaj plus znaci da ih pretvaramo u brojeve
    // Naravno, mozemo parse int ili Number
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    // Fora je da se uzme svaki target i svima se naprave jednake podjele kako bi zavrsili u isto vrijeme
    const increment = target / 200;

    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      // Da ne prelazi preko targeta
      counter.innerText = target;
    }
  }

  updateCounter();
});