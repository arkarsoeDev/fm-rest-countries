<template>
  <template v-if="!loading"
    ><section v-if="country" class="detail">
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
              <div class="country-flag" :style="flagStyle"></div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="country-info py-4 mt-3 mt-lg-0">
                <h3 class="country-name mb-4 fw-bold">{{ country.name }}</h3>
                <div class="row mb-5 mb-lg-3 mb-xl-5">
                  <div class="col-12 col-md-6 mb-5 mb-md-0 mb-xl-0">
                    <p>
                      Native Name:<span class="country-info-data">{{
                        country.nativeName
                      }}</span>
                    </p>
                    <p>
                      Population:
                      <span class="country-info-data">{{
                        populationComma
                      }}</span>
                    </p>
                    <p>
                      Region:
                      <span class="country-info-data">{{
                        country.region
                      }}</span>
                    </p>
                    <p>
                      Sub Region:
                      <span class="country-info-data">{{
                        country.subregion
                      }}</span>
                    </p>
                    <template v-if="country.capital"
                      ><p>
                        Capital:
                        <span class="country-info-data">{{
                          country.capital
                        }}</span>
                      </p></template
                    >
                  </div>
                  <div class="col-12 col-md-6">
                    <template v-if="country.topLevelDomain">
                      <p>
                        Top Level Domain:
                        <span class="country-info-data"
                          ><template
                            v-for="(code, index) in country.topLevelDomain"
                            :key="index"
                            ><template v-if="index !== 0">, </template
                            >{{ code }}</template
                          >
                        </span>
                      </p>
                    </template>
                    <template v-if="country.currencies"
                      ><p>
                        Currencies:
                        <span class="country-info-data"
                          ><template
                            v-for="(currency, index) in country.currencies"
                            :key="index"
                            ><template v-if="index !== 0">, </template
                            >{{ currency.name }}</template
                          >
                        </span>
                      </p></template
                    >
                    <template v-if="country.languages"
                      ><p>
                        Languages:
                        <span class="country-info-data"
                          ><template
                            v-for="(language, index) in country.languages"
                            :key="index"
                            ><template v-if="index !== 0">, </template
                            >{{ language.name }}</template
                          >
                        </span>
                      </p></template
                    >
                  </div>
                </div>
                <div
                  v-if="borderCountries.length > 0"
                  class="border-tags d-sm-flex"
                >
                  <p class="mb-3 border-title d-block d-sm-inline-block">
                    Border Countries:
                  </p>
                  <div class="tag-group">
                    <template
                      v-for="(data, index) in borderCountries"
                      :key="index"
                      ><router-link
                        class="country-link"
                        :to="{
                          name: 'CountryDetails',
                          params: { name: data.name },
                        }"
                        ><div class="border-tag d-inline-block">
                          <span class="badge">{{ data.name }}</span>
                        </div></router-link
                      ></template
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></template
  >
  <template v-if="loading"
    ><SkeletonCountryDetails></SkeletonCountryDetails
  ></template>
</template>

<script>
import SkeletonCountryDetails from "@/components/SkeletonCountryDetails";
export default {
  name: "CountryDetails",
  props: ["name"],
  components: {
    SkeletonCountryDetails,
  },
  // I didn't fetch only one country.If I do, I also need to fetch some countries for border countries
  // so I think fetching all countries might be better option.
  created() {
    this.$store
      .dispatch("fetchCountries")
      .then(() => {
        if (!this.country) {
          this.$router.push({
            name: "404Resource",
            params: { resource: "country" },
          });
        }
      })
      .catch(() => {
        this.$router.push({ name: "NetworkError" });
      });
  },
  computed: {
    country() {
      return this.$store.getters.getCountry(this.name);
    },
    countries() {
      return this.$store.state.countries;
    },
    borderCountries() {
      if (this.country.borders) {
        return this.countries.filter((data) => {
          return this.country.borders.find((border) => {
            return data.alpha3Code === border;
          });
        });
      } else {
        return [];
      }
    },
    populationComma() {
      return this.country.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    flagStyle() {
      return {
        backgroundImage: `url(${this.country.flag})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      };
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="scss" scoped></style>
