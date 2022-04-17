<template>
  <section v-if="country" class="detail">
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
          <div class="col-12 col-lg-6 animate-country-flag">
            <div class="country-flag" :style="flagStyle"></div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="country-info py-4 mt-3 mt-lg-0">
              <h3 class="country-name mb-4 fw-bold">{{ country.name }}</h3>
              <div class="row mb-5 mb-lg-3 mb-xl-5">
                <div
                  class="col-12 col-md-6 mb-5 mb-md-0 mb-xl-0 animate-country-data"
                >
                  <p>
                    Native Name:<span class="country-info-data">{{
                      country.nativeName
                    }}</span>
                  </p>
                  <p>
                    Population:
                    <span class="country-info-data">{{ populationComma }}</span>
                  </p>
                  <p>
                    Region:
                    <span class="country-info-data">{{ country.region }}</span>
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
                <div class="col-12 col-md-6 animate-country-data">
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
  </section>
</template>

<script>
import gsap from "gsap";
export default {
  name: "CountryDetails",
  props: ["country"],
  mounted() {
    if (this.country) {
      gsap.fromTo(
        [
          ".country-name",
          ".animate-country-data p",
          ".border-title",
          ".border-tag",
        ],
        {
          y: -20,
          opacity: 0,
        },
        {
          duration: 0.3,
          y: 0,
          opacity: 1,
          ease: "power1",
          stagger: 0.1,
        }
      );
      gsap.fromTo(
        ".animate-country-flag",
        {
          x: -400,
        },
        {
          duration: 0.8,
          x: 0,
          ease: "power1",
        }
      );
    }
  },
  updated() {
    if (this.country) {
      gsap.fromTo(
        [
          ".country-name",
          ".animate-country-data p",
          ".border-title",
          ".border-tag",
        ],
        {
          y: -20,
          opacity: 0,
        },
        {
          duration: 0.3,
          y: 0,
          opacity: 1,
          ease: "power1",
          stagger: 0.1,
        }
      );
      gsap.fromTo(
        ".animate-country-flag",
        {
          x: -400,
        },
        {
          duration: 0.8,
          x: 0,
          ease: "power1",
        }
      );
    }
  },
  computed: {
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
  },
};
</script>

<style lang="scss" scoped></style>
