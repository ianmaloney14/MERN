import { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import PersonForm from '../components/ProductForm'
import DeleteButton from "../components/DeleteButton";
const Update = (props) => {
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        console.log(id)
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                console.log('setting product')
                setProduct(res.data)
                setLoaded(true)
            })
            .catch(e => {
                console.log(e)
            })
    },[])
    const updateProduct = productParam => {
        axios.put('http://localhost:8000/api/update/' + id, productParam)
            .then(res => navigate('/'))
    }
    console.log(loaded)
    return (
        <div>
            <h1>Update Product</h1>
            {loaded && (
                <>
                    <PersonForm
                        onSubmitProp={updateProduct} 
                        initialTitle={product.title} 
                        initialPrice={product.price} 
                        initialDescription={product.description}
                    />
                    <DeleteButton productId={product._id} successCallback={()=> navigate("/")} />
                </>
            )}
        </div>
    )
}
export default Update;