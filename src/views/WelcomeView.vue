<template>
  <VSection heading="matt">
    <template #header>
      <h1 :class="animate">cooke</h1>
    </template>
    <p>designer /</p>
    <p>developer</p>
  </VSection>
</template>

<script>
import Animate from "@/mixins/Animate";
import VSection from "@/components/utility/VSection";

export default {
  components: { VSection },
  mixins: [Animate]
};
</script>

<style scoped>
h1 {
  transform: translateX(-100%);
  transition-delay: 0.2s;
}
</style>
