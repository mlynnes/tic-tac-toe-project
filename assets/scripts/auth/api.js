'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  console.log('inside signIn, data is', data)
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  console.log('inside changePassword, data is', data)
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = () => {
  console.log('inside signOut, data is:')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

const createGame = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/games/', // + store.game.id,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = (data) => {
  console.log('updateGame', data)
  return $.ajax({
    url: config.apiOrigin + '/games/ ' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getGames = () => {
  return $.ajax({
    url: config.apiOrigin + '/games/', // + store.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// const getGame = function (data) {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiOrigin + '/games?over=true' + data.game.id,
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame,
  updateGame,
  getGames
  // getGame
}
