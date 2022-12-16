import Vue from 'vue'
import Vuex from 'vuex'
import ProductsStore from "./ProductsStore.js"

Vue.use(Vuex)

export default new Vuex.Store({
  ProductsStore,
})
