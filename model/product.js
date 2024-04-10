const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    placedOrder:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},{
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;