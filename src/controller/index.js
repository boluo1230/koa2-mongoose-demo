// const requireDirectory = require('require-directory')
// module.exports = requireDirectory(module, '../controller')

const about = require('./about')
const category = require('./category')
const comments = require('./comments')
const home = require('./home')
const posts = require('./posts')
const user = require('./user')
module.exports = {
  about, category, comments, home, posts, user
}
