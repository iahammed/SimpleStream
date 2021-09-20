<template>
  <div @click="myClick" style="myStyle">carousel</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Carousel extends Vue {
  async created(): Promise<void> {
    const response = await axios.get(
      "http://hybridtv.ss7.tv/techtest/movies.json"
    );

    console.log("movies", response.data);
  }

  myClick(): void {
    console.log("myClick");
  }

  get myStyle(): Record<string, string> {
    return { color: "red" };
  }
}
</script>
