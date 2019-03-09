const {Error, ErrorMessage} = require('./BaseResult')
const HttpStatus = require('./HttpStatus')

module.exports = {
  paramException: new Error(HttpStatus.BadRequest, 'invalid params!'),
  notLoginException: new Error(HttpStatus.Unauthorized, 'user did not login!'),
  addCourseException: new ErrorMessage(HttpStatus.Unauthorized, null, '加课失败')
}
