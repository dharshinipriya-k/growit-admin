import axios from "axios";
import { base_url } from "../../utils/Base_url";
const getToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const config = {
    headers:{
        // Authorization: `Bearer ${getToken.token}`,
        Accept: "application/json",
    },
}


const uploadImg = async(data) => {
    const response = await axios.post(`${base_url}`, data, config)
    return response.data
}


const uploadService = {
 uploadImg
 
}

export default uploadService
