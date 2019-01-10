import Vue from "vue";
import Vuex from "vuex";
import jsonp from "jsonp";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // состояние (данные)
    result: []
  },
  getters: {
    results(state) {
      return state.result.map(item => {
        item.url = "https://ru.wikipedia.org/wiki/" + item.title;
        return item;
      });
    }
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items;
    }
  },
  actions: {
    // функции для запроса с сервера
    search({ commit }, query) {
      // {state, dispatch, commit} - по=умолчанию
      // state - состояние,
      // dispatch - для запуска action асинхронно
      // commit - для запуска мутаций
      const url =
        "https://ru.wikipedia.org/w/api.php?action=query&list=search&utf8=&srsearch=" +
        query +
        "&format=json";
      jsonp(url, (error, response) => {
        if (error) {
          throw error;
        }
        const results = response.query.search;
        commit("set", { type: "result", items: results });
      });
    }
  }
});
