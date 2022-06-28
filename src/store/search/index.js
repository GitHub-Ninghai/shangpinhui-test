import { reqGetSearchInfo } from "@/api";
//search模块的仓库
const state = {
    searchList:{}
};
const mutations = {
    Getsearchlist(state, searchList) {
        state.searchList = searchList;
    }
};
const actions = {
    //获取数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200) {
            commit("Getsearchlist", result.data)
        }
    }
};
//简化数据
const getters = {
    //形参state为当前仓库的state
    goodsList(state){
        return state.searchList.goodsList||[];
    },
    trademarkList(state){
        return state.searchList.trademarkList||[];
    },
    attrsList(state){
        return state.searchList.attrsList||[];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}