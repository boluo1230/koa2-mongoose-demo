const Router = require('koa-router')
const router = new Router()
const controller = require('../controller')

router.get('/:username', controller.user.index)
router.get('/signup', controller.user.signup)
router.get('/signin', controller.user.signin)
router.get('/signout', controller.user.signout)

router.post('/signup', controller.user.signup)
router.post('/signin', controller.user.signin)

module.exports = router
