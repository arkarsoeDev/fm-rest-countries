<template>
  <main>
    <SearchRow></SearchRow>
    <CountryCards></CountryCards>
  </main>
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
