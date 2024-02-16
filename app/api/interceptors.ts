import axios from "axios";
import {API_URL} from "../configs/api.config";

export const axiosClassic = axios.create({
    baseURL: 'https://chsc-backend-production.up.railway.app/',
    headers: {
        'Content-Type': 'application/json'
    }

});