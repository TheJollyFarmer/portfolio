<template>
  <nav class="nav">
      <RouterLink 
        to="/"
        class="title">
        <img 
          src="../../public/logo.svg"
          width="60"
          alt="logo">
      </RouterLink>
    <div class="nav-links">
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/about">Portfolio</RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.nav {
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  left: 0;
  padding: 2em;
  position: fixed;
  right: 0;
  top: 0;

  .nav-links {
    display: flex;
    justify-content: space-between;

    a {
      padding: 0 0.5em;
    }
  }
}
</style>
