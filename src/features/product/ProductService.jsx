import axios from "axios";
import { base_url } from "../../utils/Base_url";

const getToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const config = {
    headers:{
        Authorization: `Bearer ${getToken !== null ? getToken.token : ""}`,  
        Accept: "application/json",
    },
}

const getProducts = async()=>{
    
    const response = await axios.get(`${base_url}product/`)
    return response.data;
}

const getSingleProduct = async(prodId) => {
    const response = await axios.get(`${base_url}product/${prodId}`)
    return response.data;
    console.log(response.data);
}

const addProduct = async(prod) => {
    
    const response = await axios.post(`${base_url}product/create`, prod, config)
    if(response.data){
        return response.data
    }
}

const deleteProduct = async(prodId) => {
    
    const response = await axios.delete(`${base_url}product/${prodId}`, config)
    return response.data
}

const editProduct = async(prodId) => {
    
    const response = await axios.put(`${base_url}product/${prodId}`, config)
    return response.data
}

const ProductService = {
    getProducts,
    addProduct,
    deleteProduct,
    editProduct,
    getSingleProduct
}

export default ProductService