const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Za svaki empty div se dodaju ovi listeneri
for (const empty of empties) {
  // dragover je event koji se aktivira kad god je taj dragable iznad tog necega, kad bi ispisivali konzolu on bi konstantno ispisivao dokle god je iznad
  empty.addEventListener('dragover', dragOver);

  // dragenter je event koji ce se aktivirati samo jednom kad dragable ude u empty element
  empty.addEventListener('dragenter', dragEnter);

  // dragleave ce se aktivirati jednom i to kad izade iz empty elementa
  empty.addEventListener('dragleave', dragLeave);


  empty.addEventListener('drop', dragDrop);
}



function dragStart() {
  // this nam je zapravo samo html od tog fill na kojemu je ovaj listener - <div class="fill" draggable="true"></div>
  this.className += ' hold';
  // this.classList.add('hold'); // Ovo radi istu stvar

  // Kad nebi bilo timeouta onda nebi stigli uzeti sliku, smao bi nestala
  // Ovako on zna da prvo ide hold i onda tek mice iz prvog kontenera
  // Ovo samo mice sve klase i stavlja mu invisible te on automatski postaje nevidljiv
  setTimeout(() => this.className = 'invisible', 0);  
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}