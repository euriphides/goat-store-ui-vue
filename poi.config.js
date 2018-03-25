require('dotenv').config()

const API_HOST = (
  (process.env.NODE_ENV === 'development' && process.env.API_HOST) ?
    process.env.API_HOST :
    'https://pattys-goat-store.glitch.me'
) + '/api/v1/'

module.exports = {
  entry: {
    index: './src/index.js'
  },
  env: {
    API_HOST
  },
  homepage: './',
  removeDist: true
}
