import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const ProductList = (props) =>{
    const {products, setProducts} = props

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then((res)=>{
            setProducts(res.data)
        }).catch((err)=>{
            console.log(err)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <h1>All Products</h1>
            {
                products.map((product, index)=>{
                    return <p><Link to={"/product/" +product._id} key={index}>{product.title}</Link></p>
                })
            }
        </div>
    )
}

export default ProductList;