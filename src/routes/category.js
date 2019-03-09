const Router = require('koa-router')
const router = new Router()
const controllers = require('../controller')

router.get('/index', controllers.category.list)
router.get('/new', controllers.category.create)
router.get('/:id/delete', controllers.category.destroy)

router.post('/new', controllers.category.create)

module.exports = router
