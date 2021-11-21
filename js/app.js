// Game board array
// --------------------

let board = [
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', 'white', 'white', 'white', 'black', '', '', 'white'],
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

// let gameOver = false;


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
//       console.log(row,col)
      if (board[row][col] === '') {
      
        // empty and opponent to right and there same at some point in row
        
          let validTiles = 0
            for (let i = col+1; i < board[row].length; i++) {
              let currentTile = board[row][i]
                if (currentTile !== '' && currentTile !== player && i+1 < 7) {
                  validTiles++
                console.log(validTiles)
                }
            }
          if (validTiles !== 0 && board[row][col+1+validTiles] === player) {
            console.log(validTiles)
          board[row][col] = player;
          for (let i = col+1; i < col+1+validTiles; i++) {
            board[row][i] = player
          }
          
          changeTurns();
          placePieces();
          
          
        }
        
       }
      
      })
  }
}



