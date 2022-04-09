<template>
  <section class="country-cards c-mt mb-5">
    <div class="container">
      <div
        v-if="searchCountryName.length > 0 && searchCountry.length === 0"
        class="row text-center mt-5"
      >
        <p>
          Sorry! Can't find any country with the name "{{ searchCountryName }}"
        </p>
      </div>
      <div v-else class="row g-3 g-xl-4">
        <CountryCard
          v-for="(country, index) in allCountries"
          :key="index"
          :countryData="country"
        ></CountryCard>
      </div>
    </div>
  </section>
</template>

<script>
import CountryCard from "@/components/CountryCard";
export default {
  name: "CountryCards",
  components: {
    CountryCard,
  },
  created() {
    this.$store.dispatch("fetchCountries").catch((error) => {
      console.log(error);
    });
  },
  computed: {
    allCountries() {
      return this.$store.state.countries;
    },
    searchCountry() {
      return this.$store.state.searchCountry;
    },
    searchCountryName() {
      return this.$store.state.searchCountryName;
    },
  },
};
</script>
