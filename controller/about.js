let index = (ctx, next) => {
  ctx.body = 'about'
  ctx.render('about', {
    title: '关于'
  })
}

module.exports = {
  index
}
