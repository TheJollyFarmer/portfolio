<template>
  <div class="stat">
    <div class="stat-value">
      <span v-text="label"/>
      <span v-text="value + '%'"/>
    </div>
    <progress
      ref="observer"
      class="progress is-small is-primary"
      :value="0"
      :max="100"/>
  </div>
</template>

<script>
export default {
  name: "VProgress",

  props: {
    label: {
      type: String,
      required: true
    },

    value: {
      type: Number,
      required: true
    }
  },

  mounted() {
    setTimeout(() => (this.$refs.observer.value = this.value), 500);
  }
};
</script>

<style lang="scss" scoped>
.stat {
  align-items: center;
  display: flex;
  flex: 1 0 50%;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5em;

  .stat-value {
    align-items: center;
    display: flex;
    font-size: 0.9em;
    justify-content: space-between;
    margin-bottom: 0.2em;
    text-transform: capitalize;
    width: 100%;
    span:last-of-type {
      font-size: 0.9em;
      font-weight: bold;
    }
  }

  .progress {
    box-shadow: $shadow-heavy;
    height: 1em;
    &::-webkit-progress-value {
      transition: width 1.5s ease;
      background: $gradient;
    }
  }
}
</style>
