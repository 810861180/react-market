import axios from 'axios'
import qs from 'qs'
const httpUrl = 'http://116.62.50.76:81' // http://116.62.50.76:81  http://localhost:81

const http = axios.create({
    baseURL: httpUrl,
    // withCredentials: true, //是否跨域携带cookie
    timeout: 5000
})

// request interceptor
http.interceptors.request.use(
    config => {
        // console.log(config)
        config.url = config.baseURL + config.url
        if (config.data) {
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// response interceptor
http.interceptors.response.use(
    response => {
        let res = response.data
        return res
    }
)

export default http
