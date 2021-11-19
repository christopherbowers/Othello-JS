// Game board array
// --------------------

let board = [
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '', 'white', 'black', '', '', ''],
  ['', '', '', 'black', 'white', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', '']
];


// let blackScore
// let whiteScore
 

let player = 'black'

        /* Switch between black's and white's turns
        ----------------------------------------- */
const changeTurns = () => {
  if (player === 'black') {
    player = 'white';
  } else if (player === 'white') {
    player = 'black';
  }
}

let gameOver = false;


// Render game board in HTML
// -----------------------------

const createBoard = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      document.querySelector('.board').innerHTML += `<div id="${[row]}${[col]}" class="square"><div class=""></div></div>`;
    }
  }
}



createBoard();

// Place Pieces
// ----------------------------------------

const placePieces = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let position = board[row][col]
      if (position === '') {
      } else {
        if (position === 'black') {
          document.getElementById(`${[row]}${[col]}`).innerHTML = '<div class="black">●</div>';
          document.getElementById(`${[row]}${[col]}`).classList.add('disabled');
        }
        if (position === 'white') {
          document.getElementById(`${[row]}${[col]}`).innerHTML = '<div class="white">●</div>';
          document.getElementById(`${[row]}${[col]}`).classList.add('disabled');
        }
      }
    }
  }
}

placePieces();


// Add event listener to squares
// ----------------------------------------

for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    document.getElementById(`${[row]}${[col]}`).addEventListener('click', () => {
    board[row][col] = player;
    changeTurns();
    placePieces();
  }
)}
}



