import axios from "axios";

const api = axios.create({
    //baseURL: 'http://www.webapiesperanca.online/webApi/'

    baseURL: 'http://localhost:8080'
})

export default api;