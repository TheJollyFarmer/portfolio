<template>
  <NavBar/>
  <FractalBackGround/>
  <section class="content">
    <router-view/>
  </section>
</template>

<script>
import FractalBackGround from "@/views/FractalBackGround";
import NavBar from "@/components/NavBar";

export default {
  name: "App",

  components: { NavBar, FractalBackGround }
};
</script>

<style lang="scss">
body {
  padding-top: 127px;

  .content {
    padding: 2em;
  }
}
</style>
