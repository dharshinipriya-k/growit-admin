import axios from "axios";
import { base_url } from "../../utils/Base_url";

import config from "../../utils/Configuration";

const login = async(userData)=>{
    const response = await axios.post(`${base_url}user/admin-login`,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const orders = async()=>{
    
    const response = await axios.get(`${base_url}user/admin/get-orders`,config)
    return response.data
}



const authService = {
    login,
    orders
}

export default authService