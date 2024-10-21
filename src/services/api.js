import axios from "axios";

const api = axios.create({
    //baseURL: 'http://www.webapiesperanca.online/webApi/',

   // baseURL: 'http://172.19.0.49/pizzariateste/api/v1/',
    baseURL: 'http://localhost:8080'/*,
   /* headers: {
        'Content-Type': 'application/json'
    },*/
})

export default api;