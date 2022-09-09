<template>
  <div class="portfolio-carousel">
    <VCarouselNav
      type="prev"
      @change="updateActiveImage"/>
    <div class="carousel-wrapper">
      <VCarouselImages
        ref="carousel"
        :model="model" 
        :active="modelValue"
        :count="count"
        @selected="getDirection"/>
    </div>
    <VCarouselNav @change="updateActiveImage"/>
  </div>
</template>

<script>
import VCarouselImages from "@/components/utility/VCarouselImages";
import VCarouselNav from "@/components/utility/VCarouselNav";

export default {
  name: "VCarousel",

  components: { VCarouselImages, VCarouselNav },

  emits: ["update:modelValue"],

  props: {
    modelValue: {
      type: Number,
      required: true
    },

    model: {
      type: String,
      required: true
    },

    count: {
      type: Number,
      required: true
    }
  },

  methods: {
    getDirection(value) {
      let direction = this.modelValue < value ? "next" : "prev";

      this.updateActiveImage(direction);
    },

    updateActiveImage(direction) {
      let value = this.modelValue + (direction === "next" ? 1 : -1);

      if (value < 1 || value > this.count) return;

      let scale = direction === "next" ? 1 : 3;
      let amount = 180 * (this.modelValue - scale);

      if (this.shouldTranslate(amount)) this.moveCarousel(amount);

      this.updateEvent(value);
    },

    shouldTranslate(amount) {
      return amount > -180 && amount < 180 * (this.count - 2);
    },

    moveCarousel(amount) {
      this.$refs.carousel.$el.style.transform = `translateX(${-amount}px)`;
    },

    updateEvent(value) {
      this.$emit("update:modelValue", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio-carousel {
  margin-top: $spacing;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .carousel-wrapper {
    width: 525px;
    overflow: hidden;
  }
}
</style>
