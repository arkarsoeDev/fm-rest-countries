<template>
  <div class="theme" :class="{ dark: themeDark }">
    <header>
      <Nav></Nav>
    </header>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
  computed: {
    themeDark() {
      return this.$store.state.themeDark;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/app/scss/main";
</style>
