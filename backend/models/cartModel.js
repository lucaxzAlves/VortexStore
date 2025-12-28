const moongose = require('mongoose')

const CartSchema = new moongose.Schema({
      userId: ObjectId,
      items: {
        productID,
        quantity: Number
      }


})

module.exports = mongoose.model('CartData', CartSchema)