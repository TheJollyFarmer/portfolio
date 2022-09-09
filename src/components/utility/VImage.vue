<template>
  <figure
    :class="classes" 
    :style="size">
    <img 
      ref="observer"
      :src="img"
      :alt="image"
      @error="placeholder">
    <slot/>
  </figure>
</template>

<script>
export default {
  name: "VImage",

  props: {
    image: {
      type: [Number, String],
      required: true
    },

    dir: {
      type: String,
      required: false,
      default: ""
    },

    label: {
      type: String,
      required: false,
      default: ""
    },

    type: {
      type: String,
      required: false,
      default: "png"
    },

    dimension: {
      type: String,
      required: false,
      default: "50"
    }
  },

  data() {
    return {
      options: {
        rootMargin: "500px"
      }
    };
  },

  computed: {
    img() {
      return this.getUrl() ?? this.placeholder;
    },

    placeholder() {
      return document.createElement("canvas").toDataURL();
    },

    classes() {
      return ["image", `${this.image}`];
    },

    size() {
      return { width: this.dimension + "px" };
    }
  },

  methods: {
    getUrl() {
      return `/images/${this.dir ? this.dir + "/" : ""}${this.image}.${
        this.type
      }`;
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  border-radius: $radius;
  flex-shrink: 0;
  overflow: hidden;
  transition: opacity $hover-in;
  &:hover {
    transition: opacity $hover-out;
  }

  &.has-border {
    background-color: $primary;
    border-style: solid;
    border-width: 2px;
    box-shadow: $shadow;
    padding: 1px;
  }
}
</style>
