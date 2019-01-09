import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // состояние (данные)
    result: []
  },
  mutations: {},
  actions: {
    // функции для запроса с сервера
    search({state, dispatch, commit}, query) {
      // {state, dispatch, commit} - по=умолчанию
      // state - состояние,
      // dispatch - для запуска action асинхронно
      // commit - для запуска мутаций

    }
  }
});
