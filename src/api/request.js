//对于axios进行二次封装
import axios from "axios";
//进度条
import nProgress from "nprogress";
import "nprogress/nprogress.css"

//利用axios对象的方法创建一个实例
const requests = axios.create({
    baseURL:"/api",
    timeout:5000
});

//请求拦截器
requests.interceptors.request.use((config)=>{
    //配置对象
    nProgress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    nProgress.done();
    return res.data;
},
(error)=>{
    return Promise.reject(new Error('fail'));
})

export default requests;