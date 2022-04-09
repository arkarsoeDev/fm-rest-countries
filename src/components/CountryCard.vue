<template>
  <div :class="{ 'd-none': hide }" class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="country-card d-flex flex-column">
      <div class="country-flag" :style="flagStyle"></div>
      <div class="country-info fw-light">
        <h6 class="country-name mb-3">{{ countryData.name }}</h6>
        <p>
          Population: <span>{{ populationComma }}</span>
        </p>
        <p>
          Region: <span>{{ countryData.region }}</span>
        </p>
        <p>
          Capital: <span>{{ countryData.capital }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryCard",
  props: {
    countryData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hide() {
      if (this.searchCountry.length > 0) {
        return this.searchCountry.filter(
          (country) =>
            country.name.toLowerCase().replace(/\s/g, "") ===
            this.countryData.name.toLowerCase().replace(/\s/g, "")
        ).length > 0
          ? false
          : true;
      } else {
        return false;
      }
    },
    searchCountry() {
      return this.$store.state.searchCountry;
    },
    populationComma() {
      return this.countryData.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    flagStyle() {
      return {
        backgroundImage: `url(${this.countryData.flag})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    },
  },
};
</script>
