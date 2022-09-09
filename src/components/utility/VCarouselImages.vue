<template>
  <div class="carousel-images">
    <VImage 
      v-for="image in count"
      :key="image"
      :image="model + '-' + image"
      :dir="'portfolio/' + model"
      dimension="164"
      :class="isActive(image)"
      @click="selectEvent(image)"/>
  </div>
</template>

<script>
import VImage from "@/components/utility/VImage";

export default {
  name: "VCarouselImages",

  components: { VImage },

  emits: ["selected"],

  props: {
    model: {
      type: String,
      required: true
    },

    active: {
      type: Number,
      required: true
    },

    count: {
      type: Number,
      required: true
    }
  },

  methods: {
    isActive(idx) {
      return this.active === idx ? "is-active" : "";
    },

    selectEvent(index) {
      this.$emit("selected", index);
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-images {
  align-items: center;
  display: flex;
  transition: transform $hover-in;
  .image {
    margin: 0 $spacing-smallest;
    opacity: 0.8;
    &.is-active {
      border: 2px solid $primary;
      opacity: 1;
    }

    &:hover {
      opacity: 1;
    }

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
