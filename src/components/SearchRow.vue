<template>
  <section class="search-row c-mt">
    <div class="container">
      <div class="row justify-content-sm-between flex-column flex-sm-row">
        <div class="col-12 col-sm-7 col-lg-5">
          <Search></Search>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from "@/components/Search";
export default {
  name: "SearchRow",
  components: {
    Search,
  },
};
</script>

<style lang="scss" scoped></style>
