// Game board array
// --------------------

let board = [
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      'white',      '', '', '', ''],
  ['', '', '', 'white', 'black', '', '', ''],
  ['', '', '', 'black', 'white', '', '', ''],
  ['', '', '',      '',      'white', '', '', ''],
  ['', '', '',      '',      '', '', '', ''],
  ['', '', '',      '',      '', '', '', '']
];


// let blackScore
// let whiteScore
 

let player = 'black'

const whosTurn = () => {
  document.querySelector('.whos-turn').innerHTML = player + "’s Turn"
}
whosTurn();



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
      document.querySelector('.board').innerHTML += `<div id="${[row]}${[col]}" class="square"></div>`;
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
        }
        if (position === 'white') {
          document.getElementById(`${[row]}${[col]}`).innerHTML = '<div class="white">●</div>';

          
        }
      }
    }
  }
}

placePieces();


for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    
      document.getElementById(`${[row]}${[col]}`).addEventListener('click', () => { // Add event listener to squares
//       console.log(row,col)
      if (board[row][col] === '') {
         
          let validTiles = 0
          
          // Check to the right
            for (let i = col+1; i < board[row].length; i++) {
              let currentTile = board[row][i]
                if (currentTile !== '' && currentTile !== player && i+1 < 7) {
                  validTiles++
                }
                if (validTiles !== 0 && board[row][col+1+validTiles] === player) {
                board[row][col] = player;
                for (let i = col+1; i < col+1+validTiles; i++) {
                  board[row][i] = player;
                }
                changeTurns();
                placePieces();
                whosTurn();
                return;
              }   
            }              
        
          // Check to the left
          for (let i = col-1; i > 0; i--) { // Check for opponent tile directly to the left
              let currentTile = board[row][i]
                if (currentTile !== '' && currentTile !== player && i-1 > 0 ) { // dont look past the wall
                  validTiles++
                  console.log('Valid Tiles ' + validTiles)
                }
               
                if (validTiles !== 0 && board[row][col-1-validTiles] === player) {
                board[row][col] = player;
                for (let i = col-1; i > col-1-validTiles; i--) {
                  board[row][i] = player
                }
                placePieces();
                changeTurns();
                whosTurn();
                return;
                }
              }
              
              
          // Check to the above
          
          for (let i = row-1; i > 0; i--) { // Check for opponent tile directly above
              let currentTile = board[i][col]
                if (currentTile !== '' && currentTile !== player && i-1 > 0) { // dont look past the wall
                  validTiles++
                  console.log('Valid Tiles ' + validTiles)
                }
               
                if (validTiles !== 0 && board[row-1-validTiles][col] === player) {
                board[row][col] = player;
                for (let i = row-1; i > row-1-validTiles; i--) {
                  board[i][col] = player
                }
                placePieces();
                changeTurns();
                console.log(player)
                return;
                }
            }
            
          // Check below
            for (let i = row+1; i < board[col].length; i++) {
              let currentTile = board[i][col]
                if (currentTile !== '' && currentTile !== player && i+1 < 7) {
                  validTiles++
                }
                if (validTiles !== 0 && board[row+1+validTiles][col] === player) {
                board[row][col] = player;
                for (let i = row+1; i < row+1+validTiles; i++) {
                  board[i][col] = player;
                }
                changeTurns();
                placePieces();
                whosTurn();
                return;
              }   
            } 
       }// 
      
      }) // close event listener
  } // close col for loop
} // Close row for loop




