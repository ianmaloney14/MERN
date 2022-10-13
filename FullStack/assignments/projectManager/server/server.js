const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
// require config file
require('./config/mongoose.config')


// Middleware for formatting and allowing POST requests
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    cors({
        origin: 'http://localhost:3000'
    }),
);

// require routes
require('./routes/product.routes')(app)

// app.get('/api/addProduct', (req, res)=> {
//     res.json({message:"hello"})
// })




app.listen(PORT, () => {
    console.log(`Server is all fired up on port: ${PORT}`)
})