import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    kpt: []
  },
  mutations: {
    setKPT(state, payload) {
      state.kpt = payload;
    }
  },
  actions: {
    fetchKPT({ commit }) {
      this.$http.get("/api/kpts").then(response => {
        commit("setKPT", response);
      });
    }
  }
});
