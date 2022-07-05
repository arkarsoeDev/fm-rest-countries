<template>
  <section class="country-cards c-mt mb-5">
    <div class="container overflow-hidden">
      <div v-if="searchError" class="row text-center mt-5">
        <p class="cant-find">
          Sorry! Can't find any country with the name "{{ searchCountryName }}"
        </p>
      </div>
      <div v-else class="row g-3 g-xl-4">
        <CountryCard
          v-for="(country, index) in countries"
          class="animate-country-card"
          :key="index"
          :countryData="country"
        ></CountryCard>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";
import CountryCard from "@/components/CountryCard";
export default {
  name: "CountryCards",
  components: {
    CountryCard,
  },
  created() {
    this.$store.dispatch("fetchCountries").catch(() => {
      this.$router.push({ name: "NetworkError" });
    });
  },
  mounted() {
    if (this.countries.length > 0 && !this.searchError) {
      gsap.fromTo(
        ".animate-country-card",
        {
          opacity: 0,
          scale: 0,
          y: 200,
        },
        {
          duration: 0.5,
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power1",
          stagger: 0.1,
        }
      );
    }
  },
  updated() {
    if (this.countries.length > 0 && !this.searchError) {
      gsap.fromTo(
        ".animate-country-card",
        {
          opacity: 0,
          scale: 0,
          y: 200,
        },
        {
          duration: 0.5,
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power1",
          stagger: 0.1,
        }
      );
    }
  },
  computed: {
    searchCountryName() {
      return this.$store.state.searchCountryName;
    },
    countries() {
      return this.$store.state.countries;
    },
    searchError() {
      return this.$store.state.searchError;
    },
  },
};
</script>
