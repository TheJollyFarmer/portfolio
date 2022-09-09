<template>
  <div class="nav">
    <RouterLink
      :to="{ name: 'welcome' }"
      class="nav-link"/>
    <RouterLink
      :to="{ name: 'about' }"
      class="nav-link"/>
    <RouterLink
      :to="{ name: 'portfolio' }"
      class="nav-link"/>
    <RouterLink
      :to="{ name: 'contact' }"
      class="nav-link"/>
  </div>
</template>

<script>
export default {
  name: "NavControls",

  data() {
    return {
      views: [
        { name: "welcome" },
        {
          name: "about",
          children: [
            { name: "home" },
            { name: "moi" },
            { name: "interests" },
            { name: "skills" }
          ]
        },
        {
          name: "portfolio",
          children: [{ name: "aphelion" }, { name: "sol" }, { name: "tft" }]
        },
        { name: "contact" }
      ]
    };
  },

  mounted() {
    window.addEventListener("keyup", this.changeView);
  },

  unmounted() {
    window.removeEventListener("keyup", this.changeView);
  },

  methods: {
    changeView(e) {
      if (
        e.code !== "ArrowUp" &&
        e.code !== "ArrowDown" &&
        e.code !== "ArrowLeft" &&
        e.code !== "ArrowRight"
      )
        return;

      let route = this.getRouteName(e);

      if (route) this.$router.push({ name: route.name });
    },

    getRouteName(e) {
      let dir = this.getDirection(e);
      let active = this.$route.matched[0].name;
      let idx = this.getIndex(this.views, active);

      return e.code === "ArrowUp" || e.code === "ArrowDown"
        ? this.views[idx + dir]
        : this.getChildRouteName(idx, dir);
    },

    getChildRouteName(index, dir) {
      let views = this.views[index].children;

      if (views) {
        let child = this.$route.matched[1];
        let active = child ? child.name : views[0].name;
        let idx = this.getIndex(views, active);

        return views[idx + dir];
      }

      return undefined;
    },

    getDirection(e) {
      if (e.code === "ArrowUp" || e.code === "ArrowLeft") return -1;
      else if (e.code === "ArrowDown" || e.code === "ArrowRight") return 1;
    },

    getIndex(array, view) {
      return array.findIndex(item => item.name === view);
    }
  }
};
</script>

<style lang="scss" scoped>
$radius: 50%;

.nav {
  left: 3em;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  .nav-link {
    background-color: $white-dark;
    border-radius: $radius;
    box-shadow: $shadow;
    display: block;
    height: 30px;
    margin-bottom: 1rem;
    position: relative;
    transition: $hover-out;
    transition-property: background-color, transform;
    width: 30px;
    &:hover,
    &.is-active {
      background-color: $primary;
      &:before {
        opacity: 1;
        transform: scale(1.35);
        transition: transform $hover-in;
        transition-property: background-color, transform;
      }
    }

    &:before {
      content: "";
      border: 2px solid $white-dark;
      border-radius: $radius;
      height: 100%;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: $hover-out;
      transition-property: opacity, transform;
      width: 100%;
    }

    &:last-child {
      margin: 0;
    }
  }
}
</style>
