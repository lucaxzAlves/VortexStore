const mongoose = require('mongoose')


const CartSchema = new mongoose.Schema({
      userId: mongoose.Schema.Types.ObjectId,
      items: [{
        productID: mongoose.Schema.Types.ObjectId,
        quantity: Number
      }]


})

module.exports = mongoose.model('CartData', CartSchema)