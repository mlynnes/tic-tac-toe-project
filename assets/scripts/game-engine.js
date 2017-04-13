'use strict'

const player1 = 'x'
const player2 = 'o'
let currentPlayer = 'x'
const moveCount = '0'
const gameArray = ['', '', '', '', '', '', '', '', '']

$('.box[data-id]').on('click', function () {
  console.log(this.dataset.id)
// const someValye = this.dataset.id
  if (currentPlayer === 'x' && gameArray[this.dataset.id] === '') {
    $(this).text('x')
    gameArray[this.dataset.id] = 'x'
    currentPlayer = 'o'
  } else if (currentPlayer === 'o' && gameArray[this.dataset.id] === '') {
    $(this).text('o')
    gameArray[this.dataset.id] = 'o'
    currentPlayer = 'x'
  }
  console.log(gameArray)
})
