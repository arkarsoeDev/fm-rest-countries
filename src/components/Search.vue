<template>
  <div class="search d-inline-flex py-3 px-4 w-100 align-items-center">
    <font-awesome-icon
      icon="magnifying-glass"
      class="glass-icon me-4 me-sm-3"
      fixed-width
    />
    <form action="" @submit.prevent="searchCountry" class="w-100">
      <input
        type="text"
        class="border-0 w-100"
        v-model="searchValue"
        placeholder="Search for a country..."
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
    };
  },
  created() {
    this.searchValue = this.searchCountryName;
  },
  watch: {
    searchCountryName(newValue) {
      this.searchValue = newValue;
    },
  },
  methods: {
    searchCountry() {
      if (
        this.searchValue !== "" &&
        this.searchValue !== this.searchCountryName
      ) {
        this.$store
          .dispatch("searchCountry", this.searchValue)
          .then(() => {
            this.$store.dispatch("setSearchError", false);
          })
          .catch((error) => {
            this.$store.dispatch("setSearchError", false);
            if (error.response.status === 500) {
              this.$store.dispatch("setSearchError", true);
            }
            if (error.code === "ERR_NETWORK") {
              this.$router.push({ name: "NetworkError" });
            }
          });
      }
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
