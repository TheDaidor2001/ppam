import axios from "axios";

const http = axios.create({
    baseURL: 'https://ppam.onrender.com/'
})

export default http;