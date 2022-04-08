<template>
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="country-card d-flex flex-column">
      <div class="country-flag" :style="flagStyle"></div>
      <div class="country-info fw-light">
        <h6 class="country-name mb-3">{{ countryData.name }}</h6>
        <p>
          Population: <span>{{ countryData.population }}</span>
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
