<template>
  <div>
    <RouterView v-slot="{ Component }">
      <TransitionSlide
        :axis="axis"
        :direction="direction">
        <component :is="view(Component)"/>
      </TransitionSlide>
    </RouterView>
  </div>
</template>

<script>
import AboutHomeView from "@/views/about/HomeView";
import PortfolioHomeView from "@/views/portfolio/HomeView";
import RouterTransition from "@/mixins/RouterTransition";
import { defineAsyncComponent } from "vue";

export default {
  name: "VRouter",

  components: { AboutHomeView, PortfolioHomeView },

  props: {
    component: {
      type: String,
      required: true
    }
  },

  mixins: [RouterTransition],

  computed: {
    axis() {
      return this.$route.name === "about" || this.$route.name === "portfolio"
        ? "ver"
        : "hor";
    }
  },

  methods: {
    view(component) {
      return this.$route.name === this.component
        ? this.homeComponent()
        : component;
    },

    homeComponent() {
      return defineAsyncComponent(() =>
        import("@/views/" + this.component + "/" + "HomeView")
      );
    }
  }
};
</script>
