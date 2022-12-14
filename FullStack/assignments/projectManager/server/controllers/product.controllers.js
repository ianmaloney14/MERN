const Product = require('../models/product.model')

module.exports = {
    getAllProducts:(req, res)=>{
        Product.find({})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },
    getOneProduct:(req, res)=>{
        Product.findById(req.params.id)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },
    addProduct:(req, res)=>{
        Product.create(req.body)
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },
    updateProduct:(req, res)=>{
        Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    },
    deleteProduct:(req, res)=>{
        Product.deleteOne({ _id: req.params.id })
        .then((result)=>{
            res.json(result)
        }).catch((err)=>{
            console.log(err)
        })
    }
}