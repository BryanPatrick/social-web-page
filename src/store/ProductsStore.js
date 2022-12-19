export const state = () => ({
  products: [],
});

export const getters = {
  cardItems(state) {
    return state.products;
  },
};

export const mutations = {
  PUXAR_JSON: (state, payload) => {
    state.products = payload;
  },
};

export const actions = {
  puxarJson: ({ commit }) => {
    fetch("http://127.0.0.1:5500/testando.json")
      .then((r) => r.json())
      .then((r) => commit("PUXAR_JSON", r));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
