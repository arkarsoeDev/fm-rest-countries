<template>
  <header>
    <Nav></Nav>
  </header>
  <router-view />
</template>
<script>
import Nav from "@/components/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
<style lang="scss">
@import "@/assets/app/scss/main";
</style>
