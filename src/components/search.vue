<template>
  <div><input type="text" v-model="query" /> <button @click="search()">Search</button></div>
</template>

<script>
import store from '@/store'
export default {
  name: "search",
  data: function() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      store.dispatch('search', this.query)
    }
  }
};
</script>

<style scoped></style>
