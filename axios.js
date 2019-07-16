import axios from "axios";
import { API } from "./config";


const axiosCreateConfig = {
    baseURL: API.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 3000
};

const instance = axios.create(axiosCreateConfig);



function axiosRequestInterceptor(config){
}

instance.intereptors.request.use(axiosRequestInterceptor);


export default instance;