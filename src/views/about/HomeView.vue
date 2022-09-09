<template>
  <VSection heading="about me">
    <p>
      A full-stack developer with a keen interest in both design and development
    </p>
    <VContinue/>
  </VSection>
</template>

<script>
import VContinue from "@/components/utility/VContinue";
import VSection from "@/components/utility/VSection";

export default {
  name: "AboutHomeView",
  components: { VContinue, VSection }
};
</script>

<style lang="scss" scoped>
p {
  width: 500px;
}
</style>
