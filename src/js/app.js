function randomNumber(max, min = 0) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

const cells = document.getElementsByClassName('cell');
let activeCell = randomNumber(3);
cells[activeCell].classList.add('active');

setInterval(() => {
  cells[activeCell].classList.remove('active');
  let nextCell = randomNumber(3);
  while (activeCell === nextCell) {
    nextCell = randomNumber(3);
  }
  cells[nextCell].classList.add('active');
  activeCell = nextCell;
}, 3000);
