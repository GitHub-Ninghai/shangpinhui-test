//配置路由
import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter)
import Home from '@/pages/Home';
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

//vuerouter原型对象中的push、replace
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
//重写push和replace
//三个参数：第一个参数告诉原来Push方法往哪里跳转（传递哪些参数）
//第二、三分别为成功和失败的回调
VueRouter.prototype.push = function(location,resolve,reject){
    if (resolve && reject) {
        originPush.call(this,location,resolve,reject);
    } else {
        originPush.call(this,location,()=>{},()=>{});
    }
};

VueRouter.prototype.replace = function(location,resolve,reject){
    if (resolve && reject) {
        originReplace.call(this,location,resolve,reject);
    } else {
        originReplace.call(this,location,()=>{},()=>{});
    }
};




export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{show:true}
        },
        {
            path:"/search/:keyword?",
            component:Search,
            meta:{show:true},
            name:"search"
        },
        {
            path:"/login",
            component:Login,
            meta:{show:false}
        },
        {
            path:"/register",
            component:Register,
            meta:{show:false}
        },
        //重定向
        {
            path:'*',
            redirect:"/home"

        }
    ]
})