'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('.authMessage').text('Sign up was successful, please sign in.')
  $('.authMessage').show()
  $('#sign-up').hide()
}

const signUpFailure = () => {
  $('.authMessage').text('Sign up was unsuccessful, please try again.')
  $('.authMessage').show()
}

const signInSuccess = (response) => {
  console.log('You signed in. and response is', response)
  store.user = response.user
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#get-games').show()
  $('.message').text('You have successfully signed in! Press New Game to start!')
  $('.message').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.authMessage').hide()
}

const signInFailure = (data) => {
  console.log('You failed to sign in')
  $('.message').text('Please check your username or password and try again.')
  $('.message').show()
}

const changePasswordSuccess = (response) => {
  console.log('response is', response)
  $('.password-message').text('Password was changed successfully!')
  $('.password-message').show()
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('.password-message').text('Your original password was incorrect, please try again!')
  $('.password-message').show()
}

const signOutSuccess = (success) => {
  console.log('Succesful sign out')
}

const signOutFailure = (error) => {
  console.error(error)
}

const createGameSuccess = (data) => {
  store.game = data.game
  const engine = require('../game-engine.js')
  engine.startGame()
  $('.container').show()
  console.log('game created')
}

const createGameFailure = (error) => {
  console.error(error)
}

const updateGameSuccess = (response) => {
  // store.game = response.game
  console.log('inside updateGame', response)
}

const updateGameFailure = () => {}

const getGamesSuccess = (response) => {
  console.log('you have recieved a game', response)
  if (response.games.length === 0) {
    $('.getText').text('You have not played any games. To play, press New Game')
  } else {
    $('.getText').text('You have played ' + response.games.length + ' games!')
  }
  $('.getText').show()
}
const getGamesFailure = (error) => {
  console.error(error)
  $('.getText').text('Failed to display game count.')
  $('.getText').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure
}
