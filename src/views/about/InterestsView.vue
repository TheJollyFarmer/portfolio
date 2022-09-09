<template>
  <VSection
    heading="interests"
    prev="moi"
    next="skills">
    <p>
      Currently, I am studying machine learning,
      improving my knowledge of the Affinity suite of products, in addition to,
      improving my productivity using the Pomodoro technique, and — finally and
      endlessly — attempting to keep up-to-date with nascent Javascript
      technologies.

      Outside of programming, I enjoy relaxing by playing video games —
      currently, I am playing Elden Ring, listening to music, reading, and
      studying my favourite subjects: Philosophy, Politics, Science, and History.
    </p>
  </VSection>
</template>

<script>
import VSection from "@/components/utility/VSection";

export default {
  name: "InterestsView",
  components: { VSection }
};
</script>

<style lang="scss" scoped>
p {
  column-count: 3;
}
</style>
