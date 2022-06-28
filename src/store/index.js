import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);


import home from "./home";
import search from "./search";


//对外暴露Store类的一个实例
export default new Vuex.Store({
    //vuex仓库模块式开发存储数据
    modules:{
        home,
        search
    }
})