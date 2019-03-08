const Router = require('koa-router')
const compose = require('koa-compose')
const router = new Router()

const RouterAbout = require('./about')
const RouterCategory = require('./category')
const RouterPosts = require('./posts')
const RouterUser = require('./user')

router.use('/about', RouterAbout.routes(), RouterAbout.allowedMethods())
router.use('/category', RouterCategory.routes(), RouterCategory.allowedMethods())
router.use('/posts', RouterPosts.routes(), RouterPosts.allowedMethods())
router.use('/user', RouterUser.routes(), RouterUser.allowedMethods())

module.exports = function () {
  return compose([
    router.routes(),
    router.allowedMethods()
  ])
}
