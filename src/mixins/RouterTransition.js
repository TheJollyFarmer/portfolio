import TransitionSlide from "@/components/transitions/TransitionSlide";

export default {
  components: { TransitionSlide },

  data() {
    return {
      direction: ""
    };
  },

  watch: {
    $route(to, { matched, meta }) {
      let fromIdx = this.axis === "hor" && matched[1] ? meta.index : 0;

      this.direction = to.meta.index < fromIdx ? "prev" : "next";
    }
  }
};
