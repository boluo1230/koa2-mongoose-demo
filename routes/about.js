const Router = require('koa-router')
const router = new Router()
const controllers = require('../controller')

router.get('/index', controllers.about.index)

// router.get('/index', async (ctx, next) => {
//   ctx.body = 'about'
//   ctx.render('about', {
//     title: '关于'
//   })
// })
module.exports = router
