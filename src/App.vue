<template>
  <div class="theme" :class="{ dark: themeDark }">
    <header>
      <Nav></Nav>
    </header>
    <router-view />
  </div>
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
