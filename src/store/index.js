// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

import message from './message'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        message,
        user
    },
    state: {
        loading: false
    },
    mutations: { }
})

export default store
