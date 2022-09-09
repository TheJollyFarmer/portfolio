<template>
  <VSection
    heading="sol"
    prev="aphelion"
    next="tft">
    <VPortfolio
      :model="'sol'"
      :count="5">
      <p>JS | Vue | SASS</p>
      <p>
        A single page educational app for educating individuals about the
        vastness of the solar system.
      </p>
    </VPortfolio>
  </VSection>
</template>

<script>
import VSection from "@/components/utility/VSection";
import VPortfolio from "@/components/utility/VPortfolio";

export default {
  name: "SolView",
  components: { VPortfolio, VSection }
};
</script>
