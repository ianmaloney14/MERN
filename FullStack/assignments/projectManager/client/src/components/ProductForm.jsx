import { useState } from "react";
const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDescription)

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description})
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