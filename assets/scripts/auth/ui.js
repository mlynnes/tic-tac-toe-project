'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('.authMessage').text('Sign up was successful, please sign in.')
  $('.authMessage').show()
  $('#sign-up').hide()
}

const signUpFailure = () => {
  $('.authMessage').text('This email has already been used or your passwords did not match. Please try again!')
  $('.authMessage').show()
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#get-games').show()
  $('.message').text('You have successfully signed in! Press New Game to start!')
  $('.message').show().delay(5000).fadeOut()
  $('.play').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('.authMessage').hide()
}

const signInFailure = (data) => {
  $('.message').text('Please check your username or password and try again.')
  $('.message').show()
}

const changePasswordSuccess = (response) => {
  $('.password-message').text('Password was changed successfully!')
  $('.password-message').show().delay(5000).fadeOut()
}

const changePasswordFailure = () => {
  $('.password-message').text('Your original password was incorrect, please try again!')
  $('.password-message').show()
}

const signOutSuccess = (success) => {
  $('#change-password').hide()
  $('#get-games').hide()
  $('#new-game').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('.play').hide()
  $('.message').hide()
  $('.getText').hide()
  $('.message').text('Come back and play again soon!')
  $('.message').show().delay(5000).fadeOut()
  $('#sign-up').show()
  $('#sign-in').show()
}

const signOutFailure = () => {
}

const createGameSuccess = (data) => {
  store.game = data.game
  const engine = require('../game-engine.js')
  engine.startGame()
  $('.container').show()
}

const createGameFailure = () => {
}

const updateGameSuccess = () => {
}

const updateGameFailure = () => {}

const getGamesSuccess = (response) => {
  if (response.games.length === 0) {
    $('.getText').text('You have not played any games. To play, press New Game')
  } else {
    $('.getText').text('You have played ' + response.games.length + ' games!')
  }
  $('.getText').show()
}
const getGamesFailure = () => {
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
