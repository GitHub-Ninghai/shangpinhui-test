//API统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
//axios发请求返回Promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
//获取banner
export const reqGetBannerList = ()=>mockRequests.get('/banner');
//获取floor
export const reqFloorList = ()=>mockRequests.get('/floor');
//获取搜索模块数据,params至少是空对象,在派发actions第二个参数传入
export const reqGetSearchInfo = (params) =>requests({url:"/list",method:"post",data:params})
