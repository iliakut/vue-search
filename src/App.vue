<template>
  <div id="app">
    <header>
      <search></search>
    </header>
    <main>
      <result></result>
    </main>
  </div>
</template>

<script>
import result from '@/components/result'
import search from '@/components/search'
import store from "@/store";
export default {
  name: 'App',
  components: {
    result,
    search, // глобальная привязка store
  },
  store
};
</script>

<style>
#app {
}
</style>
