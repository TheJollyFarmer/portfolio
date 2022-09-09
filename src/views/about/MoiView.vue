<template>
  <VSection
    heading="moi"
    prev="home"
    next="interests">
    <p>
      Born in God's own country, the inspirational beauty of Yorkshire has
      driven my passion for design for over two decades. Ten years ago, I
      decided to leave behind the world of engineering, where I had earned my
      Master's degree, to pursue a career in web development. Long may it
      continue.
    </p>
  </VSection>
</template>

<script>
import VSection from "@/components/utility/VSection";

export default {
  name: "MoiView",
  components: { VSection }
};
</script>

<style lang="scss" scoped>
p {
  column-count: 3;
}
</style>
