<template>
  <div>
    <div @click="myClick" :style="myStyle">carousel</div>
    <div v-for="(movie, index) in movies" :key="index" class="panel">
      <div v-for="(film, index) in movie" :key="index">
          <p>Title: {{ film.title }}</p>
          <img :src="film.poster">
          <video width="320" height="240" controls><source :src="film.video"></video>
      </div>
    </div>
  </div>
</template>

<script>
// import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

// @Component
export default {
  data(){
    return {
      movies:''    
    }
  },
  created(){
    let url = 'http://hybridtv.ss7.tv/techtest/movies.json'
    axios.get(url)
    .then(response => {
      this.movies = response.data
    })
  },
  methods:{
    myClick() {
      console.log("myClick");
    },
    myStyle(){
      return { color: "red" };
    }
  }

  // async created(): Promise<void> {
  //   const response = await axios.get(
  //     "http://hybridtv.ss7.tv/techtest/movies.json"
  //   );
  //   this.movies 

  //   console.log("movies", response.data);
  // }

  // myClick(): void {
  //   console.log("myClick");
  // }

  // get myStyle(): Record<string, string> {
  //   return { color: "red" };
  // }
}
</script>
<style scoped>
img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
}

</style>
