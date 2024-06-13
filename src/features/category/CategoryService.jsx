import axios from "axios";
import { base_url } from "../../utils/Base_url";

const getToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const config = {
    headers:{
        Authorization: `Bearer ${getToken.token}`,  
        Accept: "application/json",
    },
}

const getCategory = async()=>{
    
    const response = await axios.get(`${base_url}category/all`)
    return response.data;
}

const addCategory = async (category) =>{
    const response = await axios.post(`${base_url}category/add`, category, config)
    return response.data
}

const deleteCategory = async (catId) => {
    const response = await axios.delete(`${base_url}category/delete/${catId}`, config)
    return response.data;
}

const CategoryService = {
    getCategory,
    addCategory,
    deleteCategory
}

export default CategoryService