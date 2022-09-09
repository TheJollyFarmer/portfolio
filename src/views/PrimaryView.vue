<template>
  <section class="content">
    <RouterView v-slot="{ Component }">
      <TransitionSlide :direction="direction">
        <component :is="Component"/>
      </TransitionSlide>
    </RouterView>
  </section>
</template>

<script>
import RouterTransition from "@/mixins/RouterTransition";

export default {
  name: "PrimaryView",

  mixins: [RouterTransition]
};
</script>

<style lang="scss" scoped>
.content {
  align-items: center;
  display: flex;
  height: 100vh;
  padding-left: 10em;
  padding-right: 2em;
}
</style>
