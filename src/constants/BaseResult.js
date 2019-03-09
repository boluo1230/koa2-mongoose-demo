'use strict'

const ConstantCode = {
  CODE_SUCCESS: 0,
  CODE_ERROR: 1,
  CODE_ERROR_UNKNOWN: -1
}

class BaseResult {
  constructor (code, data, msg) {
    this.code = code
    if (data) {
      this.data = data
    }
    if (msg) {
      this.msg = msg
    }
  }

  static create (code, msg) {
    if (code === null || code < 0) {
      throw new Error('code must greater than 0')
    }
    if (msg === null) {
      throw new Error('msg can not be empty')
    }

    return new BaseResult(code, msg)
  }
}

BaseResult.CODE_SUCCESS = ConstantCode.CODE_SUCCESS
BaseResult.CODE_ERROR = ConstantCode.CODE_ERROR
BaseResult.CODE_ERROR_UNKNOWN = ConstantCode.CODE_ERROR_UNKNOWN

/* Object.keys(HttpStatus).forEach(key=>{
  BaseResult[key.toUpperCase()] = new BaseResult(key, key, HttpStatus[key])
}) */

class Success extends BaseResult {
  constructor (data) {
    super(ConstantCode.CODE_SUCCESS, data, 'ok')
  }
}

class ErrorResult extends BaseResult {
  constructor (msg) {
    super(ConstantCode.CODE_ERROR, null, msg)
  }
}

module.exports = { ErrorMessage: BaseResult, Success, Error: ErrorResult, ErrorCode: ConstantCode }
