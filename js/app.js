let board = [
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', 'black', 'white', '', '', ''],
  ['', '', '', 'white', 'black', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '']
];

let blackScore = 0
let whiteScore = 0

let player = 'black';
let gameOver = false;

const createBoard = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      document.querySelector('.board').innerHTML += `<div id="${[row]}${[col]}" class="square"><div class=""></div></div>`;
    }
  }
}
createBoard();
let square = document.querySelectorAll('.square');


const initGrid = () => {
  document.getElementById(33).innerHTML = '<div class="">●</div>';
  document.getElementById(33).classList.add('disabled');
  document.getElementById(33).children[0].classList.add('black');
  document.getElementById(44).innerHTML = '<div class="">●</div>';
  document.getElementById(44).classList.add('disabled');
  document.getElementById(44).children[0].classList.add('black');
  
  document.getElementById(34).innerHTML = '<div class="">●</div>';
  document.getElementById(34).classList.add('disabled');
  document.getElementById(34).children[0].classList.add('white');
  document.getElementById(43).innerHTML = '<div class="">●</div>';
  document.getElementById(43).classList.add('disabled');
  document.getElementById(43).children[0].classList.add('white');
}
initGrid()








// Switch between black's and white's turns
// ----------------------------------------

const toggleTurn = () => {
  if (player === 'black') {
    player = 'white';
  } else if (player === 'white') {
    player = 'black'
    }
}


const updateScore = () => {
  let blackScore = board.filter(x => x === "black").length;
  let whiteScore = board.filter(x => x === "white").length;
}

// Game play
// ----------------------------------------


for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', () => {
      if (square[i].innerText != '●' && !gameOver){
        square[i].innerText = `●`;
        square[i].classList.add('disabled');
        square[i].classList.add(`${player}`);
        board[i] = player;

        toggleTurn();
        updateScore();
      }
      });
};
