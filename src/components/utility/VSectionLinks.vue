<template>
  <div class="section-links">
    <RouterLink
      v-if="prev"
      :to="{ name: prev }">
      prev /
    </RouterLink>
    <RouterLink
      v-if="next"
      :to="{ name: next }">
      next
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "VSectionLinks",

  props: {
    prev: {
      type: String,
      required: false,
      default: ""
    },

    next: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
.section-links {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}
</style>
