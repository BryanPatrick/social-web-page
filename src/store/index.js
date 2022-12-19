import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import productsStore from "./productsStore.js";

export default new Vuex.Store({
  modules: {
    productsStore,
  },
});
