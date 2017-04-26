'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (response) => {
  console.log('You signed in. and response is', response)
  store.user = response.user
}

const signInFailure = (data) => {
  console.log('You failed to sign in')
}

const changePasswordSuccess = (response) => {
  console.log('response is', response)
}

const changePasswordFailure = (error) => {
  console.error(error)
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
  createGameFailure
}
