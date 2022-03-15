import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL:"/api",
    timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start();// 进度条开始
    return config;
});

// 响应拦截
requests.interceptors.response.use((res)=>{
    nprogress.done();// 进度条结束
    return res.data;
},(error)=>{
    return Promise.reject(new Error(error));
});

export default requests;