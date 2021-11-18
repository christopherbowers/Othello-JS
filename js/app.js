let board = 
    [0, 0, 0, 0, 0, 0, 0, 0];
    [0, 0, 0, 0, 0, 0, 0, 0];
    [0, 0, 0, 0, 0, 0, 0, 0];
    [0, 0, 0, 0, 0, 0, 0, 0];
    [0, 0, 0, 0, 0, 0, 0, 0];
    [0, 0, 0, 0, 0, 0, 0, 0];
    [0, 0, 0, 0, 0, 0, 0, 0];
    [0, 0, 0, 0, 0, 0, 0, 0];
  
const boardContainer = document.querySelector('.board');
let square = document.querySelectorAll('.square');

let gameOver = false;

let player1 = 'black';
let player2 = 'white';


const createBoard = () => {
  for (i = 0; i < 64; i++) {
    boardContainer.innerHTML += `<div id="${[i]}" class="square"></div>`;
  }
}

const toggleTurn = (player) => {
  if (player === player1) {
    player = player2;
  } else if (player === player2) {
    player = player1
    }
}

createBoard();
const game = () => {

  for (let i = 0; i < square.length; i++) {
      square[i].addEventListener('click', () => {
        if (square[i].innerText != '●' && !gameOver){
          square[i].innerText = `${player}`;
//           board[i] = player;
          toggleTurn();
//           document.querySelector('h2').innerText = `${player}\'s Turn`;
        }
//         checkForWin();
//         isBoardFull();
//         console.log(gameOver)
        });
  };
}


game()