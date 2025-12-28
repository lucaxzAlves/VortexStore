const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
      price: Number,
      name: String,
      desc: String,
      imgURL: String,
      stars: Number,
      stock: Number,
      available: Boolean

})

module.exports = mongoose.model('ProductsData', ProductsSchema)