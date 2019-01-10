<template>
  <div>
    <div v-if="results.length !== 0">
      <div v-for="item in results" :key="item.url">
        <a :href="item.url">{{ item.title }}</a>
        <div>{{ item.url }}</div>
        <div v-html="item.snippet"></div>
      </div>
    </div>
    <div v-else><span>Нет результатов</span></div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "result",
  computed: {
    results() {
      return store.getters.results;
    }
  }
};
</script>

<style scoped></style>
