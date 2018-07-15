import Vue from 'vue'
import Vuex from 'vuex'
import { countyIndex } from './modules/countyIndex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
    },
    getters: {
    },
    modules: {
        countyIndex
    }
})
