<template>
  <div>
    <input type="text" v-model="query">
    <button>Search</button>
  </div>
</template>

<script>
export default {
  name: "search",
  data: function() {
    return {
      query: ''
    }
  }
}
</script>

<style scoped></style>