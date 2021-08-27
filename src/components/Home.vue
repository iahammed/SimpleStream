<template>
  <div>
    <h1>SimpleStream</h1>
    <p>vue.code-challenge</p>
    <Carousel />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousel from "./Carousel.vue";

@Component({ components: { Carousel } })
export default class Home extends Vue {}
</script>
