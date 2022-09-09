export default {
  props: {
    delay: {
      type: Number,
      required: false,
      default: 350
    }
  },

  data() {
    return {
      show: false
    };
  },

  computed: {
    animate() {
      return this.show ? "animate" : "";
    }
  },

  mounted() {
    setTimeout(() => (this.show = true), this.delay);
  }
};
