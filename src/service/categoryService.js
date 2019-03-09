const CategoryModel = require('../models/category')

class CategoryService {
  async create (params) {
    CategoryModel.create(params)
  }

  async find (query) {
    return CategoryModel.find(query)
  }

  async findById (cid) {
    return CategoryModel.findById(cid)
  }

  async findByIdAndRemove (cid) {
    CategoryModel.findByIdAndRemove(cid)
  }
}

module.exports = new CategoryService()
