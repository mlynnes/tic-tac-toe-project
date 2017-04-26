'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onSignUp triggered')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('inside onChangePassword')
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('inside onSignOut')
  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  console.log('inside onCreateGame')
  api.createGame()
  .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  console.log('inside onGetGames')
  api.getGames()
  .then(ui.showGetGameSuccess)
  .catch(ui.showGameFailure)
}
const addHandlers = () => {
  $('.container').hide()
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').hide() // $('#change-password').on('submit', onChangePassword)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').hide()
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').hide()
  $('#get-games').hide()
}

module.exports = {
  addHandlers
}
