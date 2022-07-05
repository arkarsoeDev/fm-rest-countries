<template>
  <template v-if="!loading">
    <CountryDetailsData :country="currentCountry"></CountryDetailsData>
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
  data() {
    return {
      loading: false,
    };
  },
  created() {
    if (this.$route.params.name) {
      let name = this.$route.params.name;
      this.fetchCountry(name);
    } else {
      this.$router.push({
        name: "404Resource",
        params: { resource: "country" },
      });
    }
  },
  beforeRouteUpdate(to) {
    if (to.params.name) {
      let name = to.params.name;
      this.fetchCountry(name);
    } else {
      this.$router.push({
        name: "404Resource",
        params: { resource: "country" },
      });
    }
  },
  methods: {
    fetchCountry(name) {
      this.loading = true;
      this.$store
        .dispatch("fetchCountry", name)
        .then(() => {
          if (!this.currentCountry) {
            this.$router.push({
              name: "404Resource",
              params: { resource: "country" },
            });
            this.loading = false;
          } else if (this.currentCountry.borders) {
            this.$store
              .dispatch("fetchCountryByCode", [
                this.currentCountry.borders,
                "name",
              ])
              .then(() => {
                this.loading = false;
              })
              .catch(() => {
                this.$router.push({ name: "NetworkError" });
                this.loading = false;
              });
          } else {
            this.loading = false;
          }
        })
        .catch(() => {
          this.$router.push({ name: "NetworkError" });
          this.loading = false;
        });
    },
  },
  computed: {
    currentCountry() {
      return this.$store.state.currentCountry[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
