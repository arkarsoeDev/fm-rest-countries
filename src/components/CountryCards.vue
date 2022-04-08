<template>
  <section class="country-cards c-mt mb-5">
    <div class="container">
      <div class="row g-3 g-xl-4">
        <CountryCard
          v-for="(country, index) in countries"
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
    countries() {
      return this.$store.state.countries;
    },
  },
};
</script>
