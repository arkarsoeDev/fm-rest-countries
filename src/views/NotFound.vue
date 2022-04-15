<template>
  <div class="container">
    <div class="row justify-content-center text-center">
      <div class="col-12">
        <div class="d-flex flex-column justify-content-center error-display">
          <h1 class="mb-3">Oops!</h1>
          <p class="mb-3">The {{ resource }} you're looking for is not here.</p>
          <router-link :to="{ name: 'Home' }"
            >Back to the home page</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: "page",
    },
  },
};
</script>
