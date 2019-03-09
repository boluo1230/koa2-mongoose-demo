module.exports = function errorHandler() {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.response.body = {
        code: err.statusCode || err.status || 500,
        message: err.message
      }
      // await ctx.render('error', {
      //   title: ctx.status,
      //   msg: err.message
      // })
      ctx.app.emit('error', err, ctx)
    }
  }
}
