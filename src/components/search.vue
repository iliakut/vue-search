<template>
  <div>
    <input type="text" v-model="query" />
    <button @click="search()">Search</button>
    <span v-if="warningEmptySearch"> Введите запрос</span>
    <button @click="inc">+</button> <span> {{ count }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
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
    inc() {
      this.$store.commit("increment");
    }
  },
  computed: {
    // используя spread
    ...mapState(["count"]), // вспомогательныя функция для упрощения импорта
    ...mapGetters(["doubledCount"]) // вспомогательныя функция для упрощения импорта гетеров
  }
};
</script>

<style scoped></style>
