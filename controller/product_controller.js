const Product = require('../model/product');
const User = require('../model/user');

module.exports.createProduct = async (req, res)=>{
    try {
        const product = await Product.findOne({title: req.body.title});
        if(product){
            return res.status(400).json({
                message: "product already exist",
                success: false
            })
        }
        const newProduct = await Product.create(req.body);
        return res.status(200).json({
            message: "product created successfully",
            success: true,
            newProduct
        })
    } catch (error) {
        return res.status(400).json({
            message: "Internal server error in creating the project!!",
            error
        })
    }
}

module.exports.update = async (req, res)=>{
    try {
        const updateProduct = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
        if(!updateProduct){
            return res.status(400).json({
                message: "Product is does not exist or not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "product updated Successfully!!",
            success: true,
            updateProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: "Ineternal server error in updating the product",
            error
        })
    }
}

module.exports.remove = async (req, res)=>{
    try {
        const updateProduct = await Product.findOneAndDelete({_id: req.params.id}, {new: true});
        if(!updateProduct){
            return res.status(400).json({
                message: "Product is does not exist or not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "product deleted Successfully!!",
            success: true,
            updateProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: "Ineternal server error in deleting the product",
            error
        })
    }
}

module.exports.view = async (req, res)=>{
    try {
        const getProduct = await Product.find({});
        if(getProduct.length===0){
            return res.status(400).json({
                message: "Product is does not exist or not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Product List!!",
            success: true,
            getProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: "Ineternal server error in getiing the product",
            error
        })
    }
}

module.exports.placingOrder = async (req, res)=>{
    try {
        const getProduct = await Product.findOneAndUpdate({id: req.params.id},
            {$push:{placedOrder: req.user._id}}, {new: true});
        if(getProduct){
            return res.status(400).json({
                message: "Product is does not exist or not found",
                success: false
            })
        }
        return res.status(200).json({
            message: "Your order placed successfully!!",
            success: true,
            getProduct
        })
    } catch (error) {
        return res.status(500).json({
            message: "Ineternal server error in getiing the product",
            error
        })
    }
}
