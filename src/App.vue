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

export default {
  name: 'App',
  components: {
    result,
    search
  }
};
</script>

<style>
#app {
}
</style>
