const {Success} = require('../constants/BaseResult')
const {categoryService} = require('../service')
const {paramException, tagNameException, tagTitleException} = require('../constants/CustomException')

module.exports = {
  async create (ctx, next) {
    const {name, title} = ctx.request.body
    if (name === '') {
      ctx.throw(tagNameException.code, tagNameException.msg)
    } else if (title === '') {
      ctx.throw(tagTitleException.code, tagTitleException.msg)
    }
    await categoryService.create(ctx.request.body)
    ctx.body = new Success()
  },
  async list (ctx, next) {
    const categories = categoryService.find({})
    ctx.body = new Success(categories)
  },
  async destroy (ctx, next) {
    const cid = ctx.params.id
    if (cid.length !== 24) {
      ctx.throw(paramException.code, paramException.msg)
    }
    const category = await categoryService.findById(cid)
    if (!category) {
      ctx.throw(paramException.code, paramException.msg)
    }
    await categoryService.findByIdAndRemove(cid)
    ctx.body = new Success()
  }
}
