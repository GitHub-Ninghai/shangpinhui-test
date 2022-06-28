import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
//三级联动组件
import TypeNav from "@/components/TypeNav";
//引入仓库
import store from './store';
//引入mock
import '@/mock/mockServe';
//引入swiper样式
import "swiper/css/swiper.css"

import Carousel from "@/components/Carousel";

Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);


Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  //注册路由:[kv一致省略v]
  router,
  store
}).$mount('#app')
