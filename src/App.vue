<template>
  <div id="app">
    <movies-dash-board :api-key="apiKey"/>
  </div>
</template>

<script>
import MoviesDashBoard from './components/MoviesDashBoard.vue'
const API_KEY = process.env.VUE_API_KEY

export default {
  name: 'app',
  components: {
    MoviesDashBoard
  },
  data() {
    return {
      apiKey: API_KEY
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
