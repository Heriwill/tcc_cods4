import axios from "axios";

const api = axios.create({
    baseURL: 'http://www.webapiesperanca.online/webApi/'
})

export default api