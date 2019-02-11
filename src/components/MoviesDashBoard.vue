<template>
  <div class="hello">
    <button type="button" @click="addMovies"> moives </button>
    <input v-if="!apiKey" @change="onChange" />
  </div>
</template>

<script>
export default {
  name: 'MoviesDashBoard',
  props: {
    apiKey: String,
    default: ''
  },
  data() {
    return {
      response: [],
      apiKeyInput: '', 
      url: `https://api.themoviedb.org/3/search/movie`
    }
  },
  methods: {
    addMovies() {
      const suchFetch = (fetchOpts, params) => {
        var url = new URL(`https://api.themoviedb.org/3/search/movie`)
        if (params != null) Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        return fetch(url, fetchOpts)
          .then((res) => res.json())
          .catch((ex) => console.log("Fetch Exception", ex));
      };
      const getData = async () => {
        const url = new URL(this.url)
        url.searchParams.query = 'Jack Reacher'
        url.searchParams.api_key = this.apiKey
        console.log(url)
        
        const response = await suchFetch({}, {api_key: this.apiKey, query: 'Jack Reacher'})
        console.log(response)
      }
      getData()
    },
    onChange($event) {
      const value = $event.target.value
      this.apiKey = value
    }
  },
  beforeMount() {
    //this.url = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}`
  },
  created() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
