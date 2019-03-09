const Router = require('koa-router')
const router = new Router()
const controller = require('../controller')

router.get('/new', controller.posts.create)
router.get('/index', controller.posts.index)
router.get('/:id', controller.posts.show)
router.get('/:id/edit', controller.posts.edit)
router.get('/:id/delete', controller.posts.destroy)

router.post('/new', controller.posts.create)
router.post('/:id/edit', controller.posts.edit)

module.exports = router
