<template>
  <section class="main-wrapper">
    <section class="main-container">
      <section class="details-page">
        <a @click.prevent="goBack" class="back-button">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.464 4.107l1.179 1.179-3.89 3.889h14.85v1.65H3.753l3.89 3.889-1.179 1.179L.572 10l5.892-5.893z" fill="#111517"/></svg>
          Back
        </a>
        <section v-if="country" class="details-container">
          <section class="flag-container">
            <img :src="country.flag" :alt="country.name">
          </section>
          <section class="info-container">
            <h1 class="country-name">{{ country.name }}</h1>
            <section class="info-split">
              <section class="info-side">
                <p v-for="(info, index) in leftInfo" :key="index" class="info">
                  <strong>{{ info.name }}: </strong>{{ info.value }}
                </p>
              </section>
              <section class="info-side">
                <p v-for="(info, index) in rightInfo" :key="index" class="info">
                  <strong>{{ info.name }}: </strong>{{ info.value }}
                </p>
              </section>
            </section>
            <section v-if="borderCountries.length" class="border-container">
              <p class="border-heading">Border Countries:</p>
              <section class="border-countries">
                <router-link v-for="border in borderCountries" :key="border.slug" :to="`/country/${border.slug}`" class="border-link">{{ border.name }}</router-link>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    country() {
      const { countryCode } = this.$route.params

      let country = null

      if (this.countries && this.countries.length) {
        country = this.countries.find(el => el.alpha3Code.toLowerCase() === countryCode.toLowerCase())
      }

      return country
    },
    leftInfo() {
      const info = [
        {
          name: 'Native Name',
          value: this.country.nativeName
        },
        {
          name: 'Population',
          value: this.country.population
        },
        {
          name: 'Region',
          value: this.country.region
        }
      ]

      if (this.country.subregion) {
        info.push({
          name: 'Sub Region',
          value: this.country.subregion
        })
      }

      info.push({
        name: 'Capital',
        value: this.country.capital
      })

      return info
    },
    rightInfo() {
      const info = []

      if (this.country.topLevelDomain.length) {
        info.push({
          name: 'Top Level Domain',
          value: this.country.topLevelDomain.join(', ')
        })
      }

      if (this.country.currencies.length) {
        info.push({
          name: 'Currencies',
          value: this.country.currencies.map(el => el.name).join(', ')
        })
      }

      if (this.country.languages.length) {
        info.push({
          name: 'Languages',
          value: this.country.languages.map(el => el.name).join(', ')
        })
      }

      return info
    },
    borderCountries() {
      let countries = []

      if (this.country.borders.length) {
        countries = this.countries
          .filter(el => this.country.borders.includes(el.alpha3Code))
          .map(el => ({
            slug: el.alpha3Code.toLowerCase(),
            name: el.name
          }))
      }

      return countries
    },
    ...mapState('app', ['countries'])
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>
