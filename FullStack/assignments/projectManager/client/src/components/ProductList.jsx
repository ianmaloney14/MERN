import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const ProductList = (props) =>{
    const {removeFromDom, products, setProducts} = props
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/delete/' + id)
            .then(res => {
                removeFromDom(id)
            }).catch((err) => {
                console.log(err)
            })
    }

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
                    return (
                        <div key={index}>
                            <Link to={"/product/" +product._id} key={index}>{product.title}</Link> |
                            <Link to={"/product/edit/" +product._id}>Edit</Link> |
                            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;