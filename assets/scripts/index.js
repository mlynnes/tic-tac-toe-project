'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEngine = require('./game-engine')
const startGame = require('./game-engine')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
  gameEngine.addHandlers()
  startGame.addHandlers()
})
