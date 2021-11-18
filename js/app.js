const boardContainer = document.querySelector('.board');
const square = document.querySelectorAll('.square');

let gameOver = false;

let player = 'black';

const createBoard = () => {
  for (i = 0; i < 64; i++) {
    boardContainer.innerHTML += `<div id="${[i]}" class="square"></div>`;
  }
}
createBoard();