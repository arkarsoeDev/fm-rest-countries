<template>
  <div
    class="filter-select w-100 d-flex align-items-center py-3 px-4 user-select-none"
    @click="filterToggle"
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
    >
      <p>{{ selectedRegion }}</p>
      <font-awesome-icon
        :icon="['fas', 'angle-down']"
        class="angle-down-icon"
        :class="{ rotate180: filterOpen }"
        fixed-width
      />
    </div>
    <div class="select-items">
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
import gsap from "gsap";
export default {
  name: "FilterSelect",
  data() {
    return {
      regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
      filterOpen: false,
      selectedRegion: "Filter by region",
    };
  },
  created() {
    if (this.region) {
      this.selectedRegion = this.region;
    }
  },
  watch: {
    filterOpen(newValue) {
      if (newValue) {
        gsap.fromTo(
          ".select-items",
          {
            scaleY: 0,
          },
          {
            duration: 0.3,
            scaleY: 1,
            ease: "power3",
            transformOrigin: "top center",
          }
        );
      } else {
        gsap.fromTo(
          ".select-items",
          {
            scaleY: 1,
          },
          {
            duration: 0.3,
            scaleY: 0,
            ease: "power3",
            transformOrigin: "top center",
          }
        );
      }
    },
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
  computed: {
    region() {
      return this.$store.state.region;
    },
  },
};
</script>
