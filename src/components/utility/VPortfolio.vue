<template>
  <div class="portfolio">
    <div>
      <slot/>
      <VCarousel
        v-model="active"
        :model="model"
        :count="count"/>
    </div>
    <TransitionFade>
      <VImage
        :image="image"
        :dir="'portfolio/' + model"
        dimension="512"/>
    </TransitionFade>
  </div>
</template>

<script>
import TransitionFade from "@/components/transitions/TransitionFade";
import VCarousel from "@/components/utility/VCarousel";
import VImage from "@/components/utility/VImage";

export default {
  name: "VPortfolio",

  components: { TransitionFade, VCarousel, VImage },

  props: {
    model: {
      type: String,
      required: true
    },

    count: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      active: 1
    };
  },

  computed: {
    image() {
      return this.model + "-" + this.active;
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  display: grid;
  grid-gap: $spacing-large;
  grid-template-columns: 1fr 1fr;
  :slotted(p:first-of-type) {
    margin-bottom: $spacing-smallest;
  }
}
</style>
