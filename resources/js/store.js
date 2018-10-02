import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const KEEP_STATUS = 0;
const PROBLEM_STATUS = 1;
const TRY_STATUS = 2;
const DONE_STATUS = 3;

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
        commit("setKPT", response.data);
      });
    }
  },
  getters: {
    getKeep: state => {
      return state.kpt.filter(item => {
        return item.status === KEEP_STATUS;
      });
    },
    getProblem: state => {
      return state.kpt.filter(item => {
        return item.status === PROBLEM_STATUS;
      });
    },
    getTry: state => {
      return state.kpt.filter(item => {
        return item.status === TRY_STATUS;
      });
    }
  }
});
