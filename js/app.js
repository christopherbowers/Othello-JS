let board = [
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', 'white', 'black', '', '', ''],
  ['', '', '', 'black', 'white', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '']
];

let player = 'black'
let blackScore = 2
let whiteScore = 2
let placedPiece = false
let cantPlacePiece = 0

let blackScoreContainer = document.createElement('span')
let whiteScoreContainer = document.createElement('span')

const drawScoreBoard = () => {
  document.querySelector('.score-board').appendChild(blackScoreContainer)
  document.querySelector('.score-board').appendChild(whiteScoreContainer)
  blackScoreContainer.innerHTML = 'Blacks: ' + blackScore
  whiteScoreContainer.innerHTML = 'White: ' + whiteScore
}
drawScoreBoard()

const updateScore = () => {
  let blacks = 0
  let whites = 0
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let value = board[row][col];
      if (value === 'black') {
        blacks += 1
      } else if (value === 'white') {
        whites += 1
      }

    }
  }
  blackScore = blacks
  whiteScore = whites
  blackScoreContainer.innerHTML = 'Blacks: ' + blacks
  whiteScoreContainer.innerHTML = 'White: ' + whites
}


const whosTurn = () => {
  document.querySelector('.whos-turn').innerHTML = player + "’s Turn"
}
whosTurn();

//// Switch between black's and white's turns ///
const changeTurns = () => {
  if (player === 'black') {
    player = 'white';
    //     canPlacePiece = 0
    placedPiece = false
  } else if (player === 'white') {
    player = 'black';
    //     canPlacePiece = 0
    placedPiece = false
  }
}

///////////// Render HTML for game board ///////////////

const createBoard = () => {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      document.querySelector('.board').innerHTML += `<div id="${[row]}${[col]}" class="square"></div>`;
    }
  }
}
createBoard();



///////////// Place Pieces on Board /////////
const placePieces = () => {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      let position = board[row][col]
      if (position === '') {} else {
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



const checkLeft = (row, col) => {
  let validTiles = 0
  for (let i = col - 1; i > 0; i--) {
    let currentTile = board[row][i]
    if (currentTile !== '' && currentTile !== player && i - 1 >= 0) {
      validTiles++
    }
    if (validTiles !== 0 && board[row][col - 1 - validTiles] === player) {
      board[row][col] = player;
      for (let i = col - 1; i > col - 1 - validTiles; i--) {
        board[row][i] = player
      }
      placePieces();
      return;
    }
  }
}

const checkRight = (row, col) => {
  let validTiles = 0
  for (let i = col + 1; i < board[row].length; i++) {
    let currentTile = board[row][i]
    if (currentTile !== '' && currentTile !== player && i + 1 < 7) {
      validTiles++
    }
    if (validTiles !== 0 && board[row][col + 1 + validTiles] === player) {
      board[row][col] = player;
      for (let i = col + 1; i < col + 1 + validTiles; i++) {
        board[row][i] = player;
      }

      placePieces();
      return;
    }
  }
}

const checkAbove = (row, col) => {
  let validTiles = 0
  for (let i = row - 1; i > 0; i--) {
    let currentTile = board[i][col]
    if (currentTile !== '' && currentTile !== player && i - 1 >= 0) {
      validTiles++
    }
    if (validTiles !== 0 && board[row - 1 - validTiles][col] === player) {
      board[row][col] = player;
      for (let i = row - 1; i > row - 1 - validTiles; i--) {
        board[i][col] = player
      }

      placePieces();
      return;
    }
  }
}

const checkBelow = (row, col) => {
  let validTiles = 0
  for (let i = row + 1; i < board[col].length; i++) {
    let currentTile = board[i][col]
    if (currentTile !== '' && currentTile !== player && i + 1 < 7) {
      validTiles++
    }
    if (validTiles !== 0 && board[row + 1 + validTiles][col] === player) {
      board[row][col] = player;
      for (let i = row + 1; i < row + 1 + validTiles; i++) {
        board[i][col] = player;
      }
      placePieces();
      return;
    }
  }
}

let gameOver = false
let isGameOver = () => {
  if (cantPlacePiece === 2) {
    gameOver = true
    if (blackScore === whiteScore)
      alert('Game Over! It\'s a Tie!') ? "" : location.reload(); {}
    if (blackScore > whiteScore) {
      alert('Game Over! Black Wins ' + blackScore + ' to ' + whiteScore) ? "" : location.reload();
    }
    if (blackScore < whiteScore)
      alert('Game Over! White Wins ' + whiteScore + ' to ' + blackScore) ? "" : location.reload();
  }
}
isGameOver()

//////// Game Play Loop ////////////

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    document.getElementById(`${[row]}${[col]}`).addEventListener('click', () => {
      checkLeft(row, col)
      checkAbove(row, col)
      checkRight(row, col)
      checkBelow(row, col)

      if (placedPiece) {
        changeTurns()
      } else {
        changeTurns()
        cantPlacePiece++
      }

      updateScore()
      drawScoreBoard()
      isGameOver()
      whosTurn()

    }) // close event listener
  } // close col for loop
} // Close row for loop