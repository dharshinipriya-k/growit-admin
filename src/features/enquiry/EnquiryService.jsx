import axios from "axios";
import { base_url } from "../../utils/Base_url";

const getEnquiry = async()=>{

    const response = await axios.get(`${base_url}enquiry/all`)  
    return response.data;
}

const EnquiryService = {
    getEnquiry,
}

export default EnquiryService