<template>
  <div class="search d-inline-flex py-3 px-4 w-100 align-items-center">
    <font-awesome-icon
      icon="magnifying-glass"
      class="glass-icon me-4 me-sm-3"
      fixed-width
    />
    <input
      type="text"
      class="border-0 w-100"
      v-model="searchValue"
      @input="searchCountry"
      placeholder="Search for a country..."
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
      searchTimer: null,
    };
  },
  created() {
    this.searchValue = this.searchCountryName;
  },
  methods: {
    searchCountry() {
      if (this.searchTimer) {
        clearTimeout(this.searchTimer);
      }

      let timer = setTimeout(() => {
        this.$store.dispatch("searchCountry", {
          newValue: this.searchValue,
        });
      }, 100);
      this.searchTimer = timer;
    },
  },
  computed: {
    searchCountryName() {
      return this.$store.state.searchCountryName;
    },
  },
};
</script>

<style lang="scss" scoped></style>
