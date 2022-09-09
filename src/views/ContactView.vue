<template>
  <VSection heading="contact me">
    <a href="mailto:mattwillcooke@gmail.com">
      mattwillcooke@gmail.com
    </a>
    <SocialLinks/>
  </VSection>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";
import VSection from "@/components/utility/VSection";

export default {
  components: { SocialLinks, VSection }
};
</script>

<style lang="scss" scoped>
.social-links {
  margin-top: $spacing-large;
}
</style>
