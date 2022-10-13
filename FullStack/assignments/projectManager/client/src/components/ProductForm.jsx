import { useState } from "react";
import axios from 'axios'

const ProductForm = (props) => {
    const {products, setProducts} = props
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/addProduct', {
            title,
            price,
            description
        })
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
            <h1>Product Manager</h1>
            <form onSubmit={ submitHandler }>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={ (e) => setTitle(e.target.value) } />
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={price} onChange={ (e) => setPrice(e.target.value) } />
                </div>
                <div>
                    <label>Description</label>
                    <input type="textarea" value={description } onChange={ (e) => setDescription(e.target.value) }/>
                </div>
                <div>
                    <input type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    )
}

export default ProductForm;