const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
      price: Number,
      name: String,
      desc: String,
      imgURL: String,
      stars: { type: Number, default: 0 },
      stock: Number,
      available: {type: Boolean, default: false} 

})

module.exports = mongoose.model('ProductsData', ProductsSchema)