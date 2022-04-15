<template>
  <section class="detail skeleton-detail">
    <div class="container px-4 px-md-0">
      <div class="row px-4">
        <router-link
          class="back-btn btn w-auto d-flex align-items-center"
          :to="{ name: 'Home' }"
        >
          <font-awesome-icon
            icon="arrow-left-long"
            class="back-btn-icon me-1"
            fixed-width
          />
          <span class="ps-1 fw-light">Back</span>
        </router-link>
      </div>
      <div class="container">
        <div class="row gx-3 gx-lg-4 gx-xl-5 align-items-center">
          <div class="col-12 col-lg-6">
            <div class="country-flag"></div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="country-info py-4 mt-3 mt-lg-0">
              <h3 class="country-name mb-4 fw-bold"></h3>
              <div class="row mb-5 mb-lg-3 mb-xl-5">
                <div class="col-12 col-md-6 mb-5 mb-md-0 mb-xl-0">
                  <p class="skeleton-data"></p>
                  <p class="skeleton-data"></p>
                  <p class="skeleton-data"></p>
                  <p class="skeleton-data"></p>
                  <p class="skeleton-data"></p>
                </div>
                <div class="col-12 col-md-6">
                  <p class="skeleton-data"></p>
                  <p class="skeleton-data"></p>
                  <p class="skeleton-data"></p>
                </div>
              </div>
              <div class="border-tags d-sm-flex">
                <p class="mb-3 border-title d-block d-sm-inline-block"></p>
                <div class="tag-group">
                  <div class="border-tag d-inline-block">
                    <span class="badge"></span>
                  </div>
                  <div class="border-tag d-inline-block">
                    <span class="badge"></span>
                  </div>
                  <div class="border-tag d-inline-block">
                    <span class="badge"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
