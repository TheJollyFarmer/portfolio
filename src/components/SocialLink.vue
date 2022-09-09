<template>
  <a
    :href="link"
    target="_blank">
    <VImage
      ref="image"
      :image="item.name"
      class="nav-link"
      dimension="24"
      type="svg"/>
  </a>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "SocialLink",

  components: { VImage },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      ref: "image",
      class: "animate-tile"
    };
  },

  computed: {
    link() {
      return "https://www." + this.item.href;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-link {
  box-shadow: $shadow;
  overflow: hidden;
  transition: transform 0.1s;
  &:hover {
    transform: scale3d(1.2, 1.2, 1.2);
    transition: transform $hover-out;
  }
}
</style>
