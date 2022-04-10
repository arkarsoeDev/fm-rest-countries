<template>
  <section class="search-row c-mt">
    <div class="container">
      <div class="row justify-content-sm-between flex-column flex-sm-row">
        <div class="col-12 col-sm-7 col-lg-5">
          <Search></Search>
        </div>
        <div class="col-8 col-sm-5 col-md-4 col-lg-3 col-xl-2">
          <FilterSelect></FilterSelect>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from "@/components/Search";
import FilterSelect from "@/components/FilterSelect";
export default {
  name: "SearchRow",
  components: {
    Search,
    FilterSelect,
  },
};
</script>

<style lang="scss" scoped></style>
