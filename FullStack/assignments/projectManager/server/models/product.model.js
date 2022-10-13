const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    }
},{timestamps:true})

const Product = mongoose.model('Product', ProductSchema)
module.exports = Product
// module.exports = mongoose.model("Product", ProductSchema);

