import axios from "axios";

// Used to make requests to the api

axios.defaults.baseURL = 'https://drf-api-pp5.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();