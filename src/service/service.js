import axios from "axios";

const api = axios.create({
    baseURL: 'https://projeto-react.com'
});

export default api;