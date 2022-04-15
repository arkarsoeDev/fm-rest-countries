<template>
  <SearchRow></SearchRow>
  <CountryCards></CountryCards>
</template>

<script>
import CountryCards from "@/components/CountryCards";
import SearchRow from "@/components/SearchRow";
export default {
  name: "Home",
  components: {
    CountryCards,
    SearchRow,
  },
};
</script>
