const ProductController = require('../controllers/product.controllers')

module.exports = (app) => {
    // get all products
    app.get('/api/allProducts',ProductController.getAllProducts)
    // get one product
    app.get('/api/product/:id',ProductController.getOneProduct)
    // create new product
    app.post('/api/addProduct',ProductController.addProduct)
    // update product
    app.put('/api/update/:id',ProductController.updateProduct)
    // delete product
    app.delete('/api/delete/:id',ProductController.deleteProduct)
}