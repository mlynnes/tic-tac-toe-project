'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
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
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signOut(data)
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}

const onCreateGame = function () {
  event.preventDefault()
  api.createGame()
  .then(ui.createGameSuccess)
  .catch(ui.createGameFailure)
}

const onUpdateGame = function (data) {
  event.preventDefault()
  api.updateGame(data)
  .then(ui.updateGameSuccess)
  .catch(ui.updateGameFailure)
}

const onGetGames = function () {
  event.preventDefault()
  api.getGames()
  .then(ui.getGamesSuccess)
  .catch(ui.getsGamesFailure)
}

const addHandlers = () => {
  $('.container').hide()
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').hide()
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').hide()
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').hide()
  $('#new-game').on('click', onCreateGame)
  $('#get-games').hide()
  $('#get-games').on('click', onGetGames)
}

module.exports = {
  addHandlers,
  onUpdateGame
}
