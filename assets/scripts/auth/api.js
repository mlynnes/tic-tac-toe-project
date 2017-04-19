'use strict'

// const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  console.log('data is', data)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com' + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = (data) => {
  console.log('inside signIn, data is', data)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com' + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = (data) => {
  console.log('inside changePassword, data is', data)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com' + '/change-password/' + store.user.id,
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
    url: 'https://aqueous-atoll-85096.herokuapp.com' + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }

  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
