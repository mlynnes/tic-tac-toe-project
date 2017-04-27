'use strict'

let currentPlayer = 'x'
let moveCount = 1
let gameArray = ['', '', '', '', '', '', '', '', '']
let win = false
// below are the click functions that pass x and o to the board
// $('.box[data-id]').on('click', function () {
  // console.log(this.dataset.id)

  // if (currentPlayer === 'x' && gameArray[this.dataset.id] === '') {
  //   $(this).text('x')
    // gameArray[this.dataset.id] = 'x'
    // currentPlayer = 'o'
  // } else if (currentPlayer === 'o' && gameArray[this.dataset.id] === '') {
    // $(this).text('o')
    // gameArray[this.dataset.id] = 'o'
    // currentPlayer = 'x'
//   }
  // console.log(gameArray)
// })

const startGame = function () {
  $('.box[data-id]').text('')
  gameArray = ['', '', '', '', '', '', '', '', '']
  moveCount = 1
  $('.game-declaration').hide()
  $('.theDraw').hide()
  currentPlayer = 'x'
  win = false
  $('.container').show()
}
// starting below is a function to check the winner
const checkForWinner = function () {
  if (gameArray[0] === gameArray[1] && gameArray[2] && gameArray[0] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play again.')
    $('.game-declaration').show()
    win = true
  } else if (gameArray[3] === gameArray[4] && gameArray[4] === gameArray[5] && gameArray[3] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play again.')
    $('.game-declaration').show()
    win = true
  } else if (gameArray[6] === gameArray[7] && gameArray[7] === gameArray[8] && gameArray[6] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play again.')
    $('.game-declaration').show()
    win = true
  } else if (gameArray[0] === gameArray[3] && gameArray[3] === gameArray[6] && gameArray[0] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play again.')
    $('.game-declaration').show()
    win = true
  } else if (gameArray[1] === gameArray[4] && gameArray[4] === gameArray[7] && gameArray[1] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play again.')
    $('.game-declaration').show()
    win = true
  } else if (gameArray[2] === gameArray[5] && gameArray[5] === gameArray[8] && gameArray[2] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play again.')
    $('.game-declaration').show()
    win = true
  } else if (gameArray[0] === gameArray[4] && gameArray[4] === gameArray[8] && gameArray[0] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play again.')
    $('.game-declaration').show()
    win = true
  } else if (gameArray[2] === gameArray[4] && gameArray[4] === gameArray[6] && gameArray[2] !== '') {
    $('.game-declaration').text(currentPlayer + ' is the winner! Play Again.')
    $('.game-declaration').show()
    win = true
  }
}

const gameEngine = function () {
  if (currentPlayer === 'x' && gameArray[this.dataset.id] === '' && win === false) {
    $(this).text('x')
    moveCount += 1
    gameArray[this.dataset.id] = 'x'
    checkForWinner()
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && gameArray[this.dataset.id] === '' && win === false) {
    $(this).text('x')
    $(this).text('o')
    moveCount += 1
    gameArray[this.dataset.id] = 'o'
    checkForWinner()
    currentPlayer = 'x'
  }
  if (moveCount === 10 && win === false) {
    $('.theDraw').text('DRAW!! Play again.')
    $('.theDraw').show()
  }
}

const addHandlers = () => {
  $('.box[data-id]').on('click', gameEngine)
  $('.new-game').on('click', startGame)
}

module.exports = {
  addHandlers,
  startGame
}
