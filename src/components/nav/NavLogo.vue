<template>
  <RouterLink
    to="/"
    class="nav-brand">
    <VImage
      image="logo"
      type="svg"/>
  </RouterLink>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "NavLogo",
  components: { VImage }
};
</script>

<style lang="scss" scoped>
.nav-brand {
  align-items: center;
  display: flex;
  font-size: 1.5em;
  .image {
    margin-right: 0.75em;
  }
}
</style>
