// Game board array
// --------------------

let board = [
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '', 'black', 'white', '', '', ''],
  ['', '', '', 'white', 'black', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', '']
];


// let blackScore
// let whiteScore
 

let player = 'black';
let gameOver = false;


// Render game board in HTML
// -----------------------------

const createBoard = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      document.querySelector('.board').innerHTML += `<div id="${[row]}${[col]}" class="square"><div class="">${[row]}${[col]}</div></div>`;
//       document.querySelector('.board').innerHTML += `<div class="square"></div>`;
    }
  }
}
createBoard();

// Place Pieces
// ----------------------------------------
let square = document.querySelectorAll('.square')

let placePieces = () => {
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

// const initGrid = () => {
//   document.getElementById(33).innerHTML = '<div class="">●</div>';
//   document.getElementById(33).classList.add('disabled');
//   document.getElementById(33).children[0].classList.add('black');

//   document.getElementById(44).innerHTML = '<div class="">●</div>';
//   document.getElementById(44).classList.add('disabled');
//   document.getElementById(44).children[0].classList.add('black');
//   
//   document.getElementById(34).innerHTML = '<div class="">●</div>';
//   document.getElementById(34).classList.add('disabled');
//   document.getElementById(34).children[0].classList.add('white');

//   document.getElementById(43).innerHTML = '<div class="">●</div>';
//   document.getElementById(43).classList.add('disabled');
//   document.getElementById(43).children[0].classList.add('white');
// }
// initGrid()






// Switch between black's and white's turns
// ----------------------------------------

// const toggleTurn = () => {
//   if (player === 'black') {
//     player = 'white';
//   } else if (player === 'white') {
//     player = 'black'
//     }
// }










// for (let i = 0; i < square.length; i++) {
//     square[i].addEventListener('click', () => {
//       if (square[i].innerText != '●' && !gameOver){
//         square[i].innerText = `●`;
//         square[i].classList.add('disabled');
//         square[i].classList.add(`${player}`);
//         board[i] = player;
//        
//         toggleTurn();
//        
//        
// //     console.log(blackScore)
//       }
//       });
// };

