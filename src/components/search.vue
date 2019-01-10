<template>
  <div>
    <input type="text" v-model="query" />
    <button @click="search()">Search</button>
    <span v-if="warningEmptySearch"> Введите запрос</span>
  </div>
</template>

<script>
import store from "@/store";
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
        store.dispatch("search", this.query);
      } else {
        this.warningEmptySearch = true;
      }
    },
    searchEmpty() {
      return this.query === "";
    }
  }
};
</script>

<style scoped></style>
