const compose = require('koa-compose')
const checkAuth = require('./checkauth')
const flash = require('./flash')
const errorHandler = require('./error_handler')

module.exports = function () {
  return compose([
    checkAuth(),
    flash(),
    errorHandler()
  ])
}
