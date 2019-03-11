const {ErrorMessage} = require('./BaseResult')
const HttpStatus = require('./HttpStatus')

module.exports = {
  paramException: new ErrorMessage(HttpStatus.BadRequest, null, 'invalid params!'),
  tagTitleException: new ErrorMessage(HttpStatus.BadRequest, null, '分类标题不能为空'),
  tagNameException: new ErrorMessage(HttpStatus.BadRequest, null, '分类名不能为空'),
  notLoginException: new ErrorMessage(HttpStatus.Unauthorized, null, 'user did not login!'),
  addCourseException: new ErrorMessage(HttpStatus.Unauthorized, null, '加课失败')
}
