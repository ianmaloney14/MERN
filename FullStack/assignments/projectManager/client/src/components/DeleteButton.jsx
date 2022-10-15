import axios from "axios";
const DeleteButton = (props) => {
    const {productId, successCallBack } = props
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/delete/' + productId)
            .then(res=>{
                successCallBack()
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton