import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: {
        type: String,
        require: true,
        minlength: 2,
        maxlenght: 80,
        unique: true,

    },
    price: {
        type: Number,
        min: 0,
        max: 5000,

    },
    imageUrl: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    desc: {
        type: String
    }

})

const Product = mongoose.model('product', productSchema) //crea el modelo basado en el modelo que acabo de crear

export default Product;