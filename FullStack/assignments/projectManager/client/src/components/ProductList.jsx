import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from '@reach/router';
import DeleteButton from "./DeleteButton";
const ProductList = (props) =>{
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data))
    },[])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    return (
        <div>
            <h1>All Products</h1>
                {products.map((product, index) => {
                    return (
                        <p key={index}>
                            <Link to={"/product/" + product._id}>
                                {product.title}
                            </Link>
                            |
                            <Link to={"/product/edit/" + product._id}>
                                Edit
                            </Link>
                            |
                            <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                        </p>
                    )
                })}
        </div>
    )
}
export default ProductList;