<template>
  <div id="app">
    <homePage></homePage>
    <allSvg></allSvg>
  </div>
</template>

<script>
import "@/assets/scss/init.scss";
import "@/assets/scss/animations.scss";
import allSvg from "@/assets/svg/allSvg";
import homePage from "@/views/homePage";

export default {
  name: "App",
  components:{
    allSvg,
    homePage
  }
}
</script>