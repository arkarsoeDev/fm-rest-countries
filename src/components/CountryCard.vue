<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <router-link
      class="country-link"
      :to="{
        name: 'CountryDetails',
        params: { name: countryData.name.common },
      }"
    >
      <div class="country-card d-flex flex-column">
        <div class="country-flag" :style="flagStyle"></div>
        <div class="country-info fw-light">
          <h6 class="country-name mb-3">{{ countryData.name.common }}</h6>
          <p>
            Population: <span>{{ populationComma }}</span>
          </p>
          <p>
            Region: <span>{{ countryData.region }}</span>
          </p>
          <template v-if="countryData.capital"
            ><p>
              Capital: <span>{{ countryData.capital[0] }}</span>
            </p></template
          >
        </div>
      </div>
    </router-link>
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
    populationComma() {
      return this.countryData.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    flagStyle() {
      return {
        backgroundImage: `url(${this.countryData.flags.png})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    },
  },
};
</script>
