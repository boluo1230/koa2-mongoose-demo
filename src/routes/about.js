const Router = require('koa-router')
const router = new Router()
const controllers = require('../controller')

router.get('/index', controllers.about.index)

module.exports = router
