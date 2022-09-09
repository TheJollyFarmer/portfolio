<template>
  <div class="social-links">
    <SocialLink
      v-for="link in links"
      :key="link.name"
      :item="link"/>
  </div>
</template>

<script>
import SocialLink from "@/components/SocialLink";

export default {
  name: "SocialLinks",

  components: { SocialLink },

  computed: {
    links() {
      return [
        { name: "linkedin", href: "linkedin.com/in/mattwillcooke/" },
        { name: "github", href: "github.com/TheJollyFarmer" },
        { name: "twitter", href: "twitter.com/thejollyfarmer" }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.social-links {
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 140px;
}
</style>
