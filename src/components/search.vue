<template>
  <div>
    <input type="text" v-model="query" />
    <button @click="search()">Search</button>
    <span v-if="warningEmptySearch"> Введите запрос</span>
    <button @click="this.increment">+</button> <span> {{ count }} </span>
    <button @click="doubleIncrementAsync">++</button>
    <button @click="dec">-</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from 'vuex'
export default {
  name: "search",
  data: function() {
    return {
      query: "",
      warningEmptySearch: false
    };
  },
  methods: {
    search() {
      if (!this.searchEmpty()) {
        this.warningEmptySearch = false;
        this.$store.dispatch("search", this.query);
      } else {
        this.warningEmptySearch = true;
      }
    },
    searchEmpty() {
      return this.query === "";
    },
    ...mapMutations(["increment"]), // используя ...map
    dec() {
      // payload нельзя передать в ...map
      this.$store.commit("decrement", { n: 3 });
    },
    ...mapActions(["doubleIncrementAsync"])
  },
  computed: {
    // используя spread
    ...mapState(["count"]), // вспомогательныя функция ...map для упрощения импорта
    ...mapGetters(["doubledCount"]) // вспомогательныя функция ...map для упрощения импорта гетеров
  }
};
</script>
<style scoped></style>
