<template>
  <section class="skeleton-country-cards country-cards c-mt mb-5">
    <div class="container overflow-hidden">
      <div class="row g-3 g-xl-4">
        <SkeletonCard
          v-for="(card, index) in preCard"
          :key="index"
        ></SkeletonCard>
      </div>
    </div>
  </section>
</template>

<script>
import SkeletonCard from "@/components/SkeletonCard";
export default {
  name: "CountryCards",
  data() {
    return {
      preCard: [],
    };
  },
  created() {
    let preArr = [];
    for (let i = 0; i < 10; i++) {
      preArr.push(i);
    }
    this.preCard = preArr;
  },
  components: {
    SkeletonCard,
  },
};
</script>
