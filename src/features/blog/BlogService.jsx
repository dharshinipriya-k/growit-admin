import axios from "axios";
import { base_url } from "../../utils/Base_url";

const getToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null

const config = {
    headers:{
        Authorization: `Bearer ${getToken !== null ? getToken.token : ""}`,  
        Accept: "application/json",
    },
}

const getBlogs = async()=>{
    
    const response = await axios.get(`${base_url}blogs/all-blogs`)
    return response.data;
}

const createBlog = async(blog) => {
    const response = await axios.post( `${base_url}blogs/create-blog`, blog, config)
    return response.data
}

const deleteBlog = async (blogId) => {
    const response = await axios.delete(`${base_url}blogs/${blogId}`, config)
}

const BlogService = {
    getBlogs,
    createBlog,
    deleteBlog
}

export default BlogService