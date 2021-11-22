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

const whosTurn = () => {
  document.querySelector('.whos-turn').innerHTML = player + "’s Turn"
}
whosTurn();

//// Switch between black's and white's turns ///
const changeTurns = () => {
  if (player === 'black') {
    player = 'white';
  } else if (player === 'white') {
    player = 'black';
  }
}

///////////// Render HTML for game board ///////////////

const createBoard = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      document.querySelector('.board').innerHTML += `<div id="${[row]}${[col]}" class="square"></div>`;
    }
  }
}
createBoard();



///////////// Place Pieces on Board /////////
const placePieces = () => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      let position = board[row][col]
      if (position === '') {
      } else {
        if (position === 'black') {
          document.getElementById(`${[row]}${[col]}`).innerHTML = '<div class="black"></div>';
        }
        if (position === 'white') {
          document.getElementById(`${[row]}${[col]}`).innerHTML = '<div class="white"></div>';
        }
      }
    }
  }
}
placePieces();


 
const checkLeft = (row,col) => {          
  let validTiles = 0
  for (let i = col-1; i > 0; i--) { 
    let currentTile = board[row][i]
      if (currentTile !== '' && currentTile !== player && i-1 >= 0 ) {
        validTiles++
      }
   
      if (validTiles !== 0 && board[row][col-1-validTiles] === player) {
      board[row][col] = player;
      for (let i = col-1; i > col-1-validTiles; i--) {
        board[row][i] = player
      }
      placePieces();
      return;
    }
  }
}

const checkRight = (row,col) => {
  let validTiles = 0
    for (let i = col+1; i < board[row].length; i++) {
      let currentTile = board[row][i]
        if (currentTile !== '' && currentTile !== player && i+1 < 7) {
          validTiles++
          console.log(validTiles)
      }
      if (validTiles !== 0 && board[row][col+1+validTiles] === player) {
        board[row][col] = player;
      for (let i = col+1; i < col+1+validTiles; i++) {
          board[row][i] = player;
        }
        placePieces();
        return;
        } 
    }   
}
      
const checkAbove = (row,col) => {               
  let validTiles = 0
  for (let i = row-1; i > 0; i--) { 
    let currentTile = board[i][col]
      if (currentTile !== '' && currentTile !== player && i-1 >= 0) {
        validTiles++
      }
      if (validTiles !== 0 && board[row-1-validTiles][col] === player) {
      board[row][col] = player;
      for (let i = row-1; i > row-1-validTiles; i--) {
        board[i][col] = player
      }
      placePieces();
      return;
      }
    }
}

const checkBelow = (row,col) => {
  let validTiles = 0
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
      placePieces();
      return;
    }   
  } 
}

//////// Game Play Loop ////////////

for (let row = 0; row < board.length; row++) {
  for (let col = 0; col < board[row].length; col++) {
    document.getElementById(`${[row]}${[col]}`).addEventListener('click', () => { // Add event listener to squares
      checkLeft(row,col)
      checkAbove(row,col)
      checkRight(row,col)
      checkBelow(row,col)

      changeTurns()
      whosTurn()


        

            
            
          // Check below

            
            
             // Check down and right
//             for (let i = row+1; i < board[col].length; i++) {
//               for (let j = col+1; i < board[row].length; i++) {
//                 let currentTile = board[i][j]
//                   if (currentTile !== '' && currentTile !== player && i+1 < 7 && i < 7) {
//                     validTiles++
//                   }
//                   
//                   if (validTiles !== 0 && board[row+1+validTiles][col+1+validTiles] === player) {
//                     board[row][col] = player;
//                     for (let i = row+1; i < row+1+validTiles; i++) {
//                       for (let j = col+1; j < col+1+validTiles; j++) {
//                         board[i][j] = player;
//                         console.log(col+1+validTiles)
//                       }
//                     }
//                   placePieces();
// //                   changeTurns();
//                   whosTurn();
//                   return;
//                 }
//               } 
//             } 
            

      
      }) // close event listener
  } // close col for loop
} // Close row for loop



