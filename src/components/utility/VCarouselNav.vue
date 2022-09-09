<template>
  <VImage
    image="arrow"
    type="svg"
    class="carousel-nav"
    @click="clickEvent"/>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "VCarouselNav",

  components: { VImage },

  emits: ["change"],

  props: {
    type: {
      type: String,
      default: "next"
    }
  },

  methods: {
    clickEvent() {
      this.$emit("change", this.type);
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-nav:first-child {
  transform: rotate(180deg);
}
</style>
