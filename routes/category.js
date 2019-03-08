const Router = require('koa-router')
const router = new Router()
const controllers = require('../controller')

router.get('/category', controllers.category.list)
router.get('/category/new', controllers.category.create)
router.get('/category/:id/delete', controllers.category.destroy)

router.post('/category/new', controllers.category.create)

module.exports = router
