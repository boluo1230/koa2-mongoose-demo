const {Success, ErrorMessage} = require('../constants/BaseResult')
const {categoryService} = require('../service')

module.exports = {
  async create (ctx, next) {
    const {name, title} = ctx.request.body
    let errMsg = ''
    if (name === '') {
      errMsg = '分类名不能为空'
    } else if (title === '') {
      errMsg = '分类标题不能为空'
    }
    if (errMsg) {
      ctx.throw(400, errMsg)
      return
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
      ctx.throw(404, '分类不存在')
    }
    const category = await categoryService.findById(cid)
    if (!category) {
      ctx.throw(404, '分类不存在')
    }
    await categoryService.findByIdAndRemove(cid)
    ctx.body = new Success()
  }
}
