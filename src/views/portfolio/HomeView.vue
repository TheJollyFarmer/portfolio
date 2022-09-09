<template>
  <VSection heading="aphelion">
    <VPortfolio
      :model="'aphelion'"
      :count="6">
      <p>JS | Vue | SASS</p>
      <p>
        A single-page portfolio website for a web design company
        designed to illustrate their simplicity is beauty philosophy.
      </p>
    </VPortfolio>
    <VContinue/>
  </VSection>
</template>

<script>
import VContinue from "@/components/utility/VContinue";
import VSection from "@/components/utility/VSection";
import VPortfolio from "@/components/utility/VPortfolio";

export default {
  name: "PortfolioHomeView",

  components: {
    VContinue,
    VPortfolio,
    VSection
  }
};
</script>
