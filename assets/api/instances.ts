import axios from "axios";

/**
 * Instance for NextJS API
 */
export const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * Instance for ChartScrolls API
 */
export const instanceChSC= axios.create({
    baseURL: process.env.NEXT_PUBLIC_CHSC_BACKEND_API_URL,
});