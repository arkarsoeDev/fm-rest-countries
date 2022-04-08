<template>
  <nav class="navbar navbar-dark custom-nav py-4 py-sm-3">
    <div class="container">
      <span class="custom-nav__title mb-0 fw-bold">Where in the world?</span>
      <div @click="changeTheme" class="toggle d-flex align-items-center">
        <span v-if="themeDark">
          <font-awesome-icon
            :icon="['fas', 'moon']"
            class="moon-icon me-2 text-white"
            fixed-width
          />
        </span>
        <span v-else>
          <font-awesome-icon
            :icon="['far', 'moon']"
            class="moon-icon me-2"
            fixed-width
          />
        </span>
        <span class="fw-normal user-select-none">Dark Mode</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    changeTheme() {
      this.$store.dispatch("changeTheme", !this.themeDark);
    },
  },
  computed: {
    themeDark() {
      return this.$store.state.themeDark;
    },
  },
};
</script>
