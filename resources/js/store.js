import Vue from "vue";
import Vuex from "vuex";
import constants from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    kpt: [],
    formActive: false,
    formSelectStatus: 0,
    displayStatus: 0
  },
  mutations: {
    setKPT(state, payload) {
      state.kpt = payload;
    },
    setFormActive(state, payload) {
      state.formActive = payload;
    },
    setFormSelectStatus(state, payload) {
      state.formSelectStatus = payload;
    },
    setDisplayStatus(state, payload) {
      state.displayStatus = payload;
    },
    setKPTList(state, payload) {
      state.kpt = payload;
    }
  },
  actions: {
    fetchKPT({ commit }) {
      this.$http.get("/api/kpts").then(response => {
        commit("setKPT", response.data);
      });
    },
    postKPT({ state, commit, dispatch, getters }, { content }) {
      const nextOrder = getters.getKPT(state.formSelectStatus).length;
      this.$http
        .post("/api/kpts", {
          content,
          status: state.formSelectStatus,
          order: nextOrder
        })
        .then(response => {
          console.log(response);
          dispatch("fetchKPT");
        })
        .catch(error => {
          console.error(error);
        });
    },
    toggleKPTForm({ commit }, { active }) {
      commit("setFormActive", active);
    },
    switchDisplayStatus({ commit }, { key }) {
      commit("setDisplayStatus", key);
      commit("setFormSelectStatus", key);
    },
    updateKPTList({ commit }, { list }) {
      commit("setKPTList", list);
    }
  },
  getters: {
    getKPT: state => key => {
      return state.kpt.filter(item => {
        return item.status === key;
      });
    }
  }
});
