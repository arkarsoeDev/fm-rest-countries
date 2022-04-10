<template>
  <div
    class="filter-select w-100 d-flex align-items-center py-3 px-4 user-select-none"
  >
    <select>
      <option value="0">Filter by region</option>
      <option value="1">Africa</option>
      <option value="2">America</option>
      <option value="3">Asia</option>
      <option value="4">Europe</option>
    </select>
    <div
      class="select-selected d-flex align-items-center justify-content-between w-100"
      @click="filterToggle"
    >
      <p>{{ selectedRegion }}</p>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="angle-down-icon"
        fixed-width
      />
    </div>
    <div v-if="filterOpen" class="select-items">
      <div
        @click="setRegion(region)"
        v-for="(region, index) in regions"
        :key="index"
      >
        {{ region }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterSelect",
  data() {
    return {
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      filterOpen: false,
      selectedRegion: "Filter by region",
    };
  },
  methods: {
    setRegion(region) {
      this.selectedRegion = region;
      this.$store.dispatch("setRegion", {
        region: region,
      });
    },
    filterToggle() {
      this.filterOpen = !this.filterOpen;
    },
  },
};
</script>
