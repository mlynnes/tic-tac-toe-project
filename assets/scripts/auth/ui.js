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
  $('.container').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#new-game').show()
  $('#get-games').show()
  $('.message').text('You have successfully signed in!')
  $('.message').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}

const signInFailure = (data) => {
  console.log('You failed to sign in')
  $('.message').text('Sign in failed, please try again.')
  $('.message').show()
}

const changePasswordSuccess = (response) => {
  console.log('response is', response)
  $('.password-message').text('Password was changed successfully!')
  $('.password-message').show()
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('.password-message').text('Password was not succesfully changed, please try again!')
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
}

const createGameFailure = (error) => {
  console.error(error)
}

const showGamesSuccess = (response) => {
  if (response.games.length === 0) {
    $('.getText').text('You haven\'t played any games yet :(')
    $('.getText').show()
  } else if (response.games.length === 1) {
    $('.getText').text('You played ' + response.games.length + ' game')
    $('.getText').show()
  } else {
    $('.getText').text('You played ' + response.games.length + ' games')
    $('.getText').show()
  }
}
const showGamesFailure = () => {
  $('.getText').text('Failed to display game count')
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
  showGamesSuccess,
  showGamesFailure
}
