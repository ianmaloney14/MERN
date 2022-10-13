const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/productManagerDb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("Connected to Project Manager Db")
}).catch((err) => {
    console.log(err)
})