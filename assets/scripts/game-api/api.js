'use strict'

// const config = require('../config.js')
const store = require('../store.js')

const createNew = () => {
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com' + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  createNew
}
