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

let blackScore = 0

let getBlackScore = () => {
for (let i = 0; i < board.length; i++) {

let scoreCount = board[i].reduce(function(acc,value) {
  if (value == 'black') {
    acc++
    blackScore++
    return acc
  }
},0) 
}
console.log(blackScore)
}

// let blackScore
// let whiteScore
let placedPiece = false

let player = 'black'

const whosTurn = () => {
  document.querySelector('.whos-turn').innerHTML = player + "’s Turn"
}
whosTurn();

//// Switch between black's and white's turns ///
const changeTurns = () => {
  if (player === 'black') {
    player = 'white';
    placedPiece = false
  } else if (player === 'white') {
    player = 'black';
    placedPiece = false
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
          placedPiece = true
        }
        if (position === 'white') {
          document.getElementById(`${[row]}${[col]}`).innerHTML = '<div class="white"></div>';
          placedPiece = true
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
//           console.log(validTiles)
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
    document.getElementById(`${[row]}${[col]}`).addEventListener('click', () => {
      checkLeft(row,col)
      checkAbove(row,col)
      checkRight(row,col)
      checkBelow(row,col)
      
      if (placedPiece) {
        changeTurns()
      }
      getBlackScore()
      
      whosTurn()
      
      }) // close event listener
  } // close col for loop
} // Close row for loop

// 
// for (let row = 0; row < board.length; row++) {
//   for (let col = 0; col < board[row].length; col++) {
//   
//     const countBlack = board[row].filter((word) => { return word === 'black' })
// //     const countBlack = board.filter((word) => { return word === 'black' })
//     console.log(countBlack)
//     
//   }
// }





//   let white = (board[i].reduce(word =>    word === 'white')) 
// //     blackScore++
//     console.log(white)
//   }
