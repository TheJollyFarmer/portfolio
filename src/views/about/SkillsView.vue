<template>
  <VSection heading="skills">
    <div class="skills-progress">
      <VProgress
        v-for="skill in skills"
        :key="skill.label"
        :label="skill.label"
        :value="skill.value"/>
    </div>
  </VSection>
</template>

<script>
import skills from "@/data/skills.json";
import VProgress from "@/components/utility/VProgress";
import VSection from "@/components/utility/VSection";

export default {
  name: "SkillsView",

  components: { VProgress, VSection },

  data() {
    return {
      skills
    };
  }
};
</script>

<style lang="scss" scoped>
.skills-progress {
  display: flex;
  flex-wrap: wrap;
}
</style>
