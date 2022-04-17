<template>
  <template v-if="!loading">
    <CountryDetailsData :country="this.country"></CountryDetailsData>
  </template>
  <template v-if="loading"
    ><SkeletonCountryDetails></SkeletonCountryDetails
  ></template>
</template>

<script>
import SkeletonCountryDetails from "@/components/SkeletonCountryDetails";
import CountryDetailsData from "@/components/CountryDetailsData";
export default {
  components: {
    SkeletonCountryDetails,
    CountryDetailsData,
  },
  props: ["name"],
  // I didn't fetch only one country.If I do, I also need to fetch some countries for border countries
  // so I think fetching all countries might be better option.
  created() {
    this.$store
      .dispatch("fetchCountries")
      .then(() => {
        if (!this.country) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "country" },
          });
        }
      })
      .catch(() => {
        this.$router.push({ name: "NetworkError" });
      });
  },
  computed: {
    country() {
      return this.$store.getters.getCountry(this.name);
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="scss" scoped></style>
