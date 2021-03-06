import Vue from "vue";
import Vuex from "vuex";
import jsonp from "jsonp";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // состояние (данные)
    result: [],
    count: 0
  },
  getters: {
    // отредактированные состояния
    results(state) {
      return state.result.map(item => {
        item.url = "https://ru.wikipedia.org/wiki/" + item.title;
        return item;
      });
    },
    doubledCount: state => {
      return state.count * 2;
    },
    doubledDouble: (state, getters) => {
      return getters.doubledCount * 2;
    }
    //Геттеры доступны в объекте store.getters
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items;
    },
    increment(state) {
      state.count++;
    },
    decrement(state, payload) {
      // n - payload дополнительный параметр - может быть как единсвенная переменная
      // payload - payload дополнительный параметр  - может быть как объект
      state.count -= payload.n;
    }
  },
  actions: {
    // функции для запроса с сервера, инициации мутаций
    // могут быть асинхронными, в отличии от мутаций
    // action может обрабатывать promise
    increment({ commit }, payload) {
      // {state, dispatch, commit} - деструктуризация
      // state - состояния
      // commit - для запуска мутаций
      // dispatch - для запуска actions
      // payload - дополнительные входные параметры
      console.log(payload.message);
      commit("increment");
    },
    doubleIncrementAsync({ dispatch }) {
      setTimeout(() => {
        dispatch("increment", { message: "запущен action" });
      }, 500);
    },
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
