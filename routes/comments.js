const Router = require('koa-router')
const router = new Router()
const controller = require('../controller')

router.post('/comments/new', controller.comments.create)
router.get('/comments/:id/delete', controller.comments.destroy)
