<template>
  <nav class="nav">
    <NavLogo/>
    <SocialLinks/>
  </nav>
</template>

<script>
import NavLogo from "@/components/nav/NavLogo";
import SocialLinks from "@/components/SocialLinks";

export default {
  name: "NavBar",
  components: { SocialLinks, NavLogo }
};
</script>

<style lang="scss" scoped>
.nav {
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 2em;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
