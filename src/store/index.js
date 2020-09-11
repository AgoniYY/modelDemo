import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations.js'

// vuex-persistedstate： 固化token、登录状态等不常改动的值到本地，减少接口访问，提升用户体验
// this.$store.commit('save', ['token', 'token2']) 在vue文件中执行此条代码可更改token

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        
    },
    mutations: mutations,
    plugins: [createPersistedState({ storage: window.sessionStorage })],
    actions: {
        
    },
    getters: {
        
    }
})