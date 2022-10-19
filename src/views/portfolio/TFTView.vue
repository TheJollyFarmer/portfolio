<template>
  <VSection
    heading="tftacticians"
    link="tftacticians.com">
    <VPortfolio
      :model="'tft'"
      :count="6">
      <p>JS | Vue | VueX | SASS</p>
      <p>
        An SPA for the Riot game TeamFight Tactics helping guide players through
        their TFT experience.
      </p>
    </VPortfolio>
  </VSection>
</template>

<script>
import VPortfolio from "@/components/utility/VPortfolio";
import VSection from "@/components/utility/VSection";

export default {
  name: "TFTView",
  components: { VPortfolio, VSection }
};
</script>
