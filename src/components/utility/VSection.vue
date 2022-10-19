<template>
  <section class="section">
    <a
      v-if="link"
      :href="'https://www.' + link"
      target="_blank"
      rel="noopener noreferrer">
      <h1 :key="$route.name" v-text="heading" :class="animate"/>
    </a>
    <h1 v-else :key="$route.name" v-text="heading" :class="animate"/>
    <slot name="header"/>
    <VDividers/>
    <div class="section-body">
      <slot/>
      <VSectionLinks
        v-if="next || prev"
        :next="next"
        :prev="prev"/>
    </div>
  </section>
</template>

<script>
import Animate from "@/mixins/Animate";
import VDividers from "@/components/utility/VDividers";
import VSectionLinks from "@/components/utility/VSectionLinks";

export default {
  name: "VSection",

  components: { VSectionLinks, VDividers },

  mixins: [Animate],

  props: {
    heading: {
      type: String,
      required: true
    },

    prev: {
      type: String,
      required: false,
      default: ""
    },

    next: {
      type: String,
      required: false,
      default: ""
    },

    link: {
      type: String,
      required: false,
      default: undefined
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  overflow: hidden;
  h1 {
    transform: translateX(-100%);
  }

  .section-body {
    font-size: 2em;
    font-weight: bold;
    line-height: 1.25;
  }
}
</style>
