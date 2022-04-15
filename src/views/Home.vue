<template>
  <SearchRow></SearchRow>
  <template v-if="loading"><SkeletonCards></SkeletonCards></template>
  <template v-if="!loading"><CountryCards /></template>
</template>

<script>
import CountryCards from "@/components/CountryCards";
import SearchRow from "@/components/SearchRow";
import SkeletonCards from "@/components/SkeletonCards";
export default {
  name: "Home",
  components: {
    CountryCards,
    SearchRow,
    SkeletonCards,
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
