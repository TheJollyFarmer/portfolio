<template>
  <RouterLink :to="{ name: 'moi' }">
    <span v-text="'Continue'"/>
    <VImage
      image="arrow"
      type="svg"/>
  </RouterLink>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "VContinue",
  components: { VImage }
};
</script>

<style lang="scss" scoped>
a {
  align-items: center;
  display: inline-flex;
  margin-top: $spacing-large;
  &:hover .image {
    animation: bounce 2s infinite;
  }

  span {
    margin-right: 1.2em;
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40% {
    transform: translate3d(-30px, 0, 0);
  }
  60% {
    transform: translate3d(-15px, 0, 0);
  }
}
</style>
