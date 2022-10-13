import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";


const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    
    const deleteProduct = (id) => {
        axios.delete('http://localhost:8000/api/delete/' + id)
            .then(res => {
                navigate("/")
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product/' + id)
        .then((res)=>{
            setProduct(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])


    return (
        <div>
            <h1>Product Details</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}

export default ProductDetails;