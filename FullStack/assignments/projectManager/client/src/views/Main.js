import { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from '../components/ProductForm'
import ProductList from "../components/ProductList";
const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    const removeFromDom = id => {
        axios.delete('http://localhost:8000/api/delete/' + id)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setProducts(products.filter(product => product._id !== id))
        }).catch((err)=> {
            console.log(err)
        })
    }
    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/addProduct', productParam)
                .then(res=>{
                    console.log(res)
                    console.log(res.data)
                    setProducts([...products, res.data])
                })
                .catch((err)=>{
                    console.log(err)
                })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom} />
        </div>
    )
}
export default Main;