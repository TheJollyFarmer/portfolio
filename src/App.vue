<template>
  <NavBar/>
  <FractalBackGround/>
  <NavControls/>
  <PrimaryView/>
</template>

<script>
import FractalBackGround from "@/components/FractalBackGround";
import NavBar from "@/components/nav/NavBar";
import NavControls from "@/components/nav/NavControls";
import PrimaryView from "@/views/PrimaryView";

export default {
  name: "App",

  components: {
    FractalBackGround,
    NavBar,
    NavControls,
    PrimaryView
  }
};
</script>
