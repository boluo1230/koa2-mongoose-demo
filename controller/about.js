const {addCourseException} = require('../constants/CustomException')
const {ErrorMessage} = require('../constants/BaseResult.js')
let index = (ctx, next) => {
  const code = addCourseException.code
  const message = addCourseException.msg
  if (addCourseException instanceof ErrorMessage) {
    ctx.throw(code, message)
  }
  ctx.body = 'about'
}

module.exports = {
  index
}
