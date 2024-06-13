import axios from "axios";
import { base_url } from "../../utils/Base_url";

const getBlogCat = async()=>{
    
    const response = await axios.get(`${base_url}blog-category/all`)
    console.log(response.data);
    return response.data;
}

const BlogCatService = {
    getBlogCat,
}

export default BlogCatService