<template>
    <div :class="['dividers', animate]">
      <div class="divider one"/>
      <div class="divider two"/>
    </div>
</template>

<script>
import Animate from "@/mixins/Animate";

export default {
  name: "VDividers",

  mixins: [Animate]
};
</script>

<style lang="scss" scoped>
.dividers {
  margin: 2em 0 4em 0;
  transform: translateX(-100%);
  transition-delay: 0.2s;
  .divider {
    width: 100px;
    height: 5px;
    border-radius: 3px;
    background-color: $primary;
    &.one {
      transform: translateX(50%);
    }

    &.two {
      transform: translate(100%, 300%);
    }
  }
}
</style>
