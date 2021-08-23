<template>
  <section class="main-wrapper gray">
    <section class="main-container">
      <section class="home-page">
        <form action="#" class="home-filter-bar">
          <input v-model="search" type="text" class="search-input" placeholder="Search for a country…">
          <select v-model="filter" class="filter-select">
            <option value="">Filter by Region</option>
            <option v-for="(region, index) in regions" :key="index">{{ region }}</option>
          </select>
        </form>
        <section class="countries-list">
          <CountryItem v-for="country in searchedCountries" :key="country.numericCode" :country="country" />
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import CountryItem from '@/components/CountryItem'
import { mapState } from 'vuex'

export default {
  components: { CountryItem },
  data() {
    return {
      filter: '',
      search: ''
    }
  },
  computed: {
    regions() {
      const regions = []

      if (this.countries && this.countries.length) {
        this.countries.forEach(country => {
          const { region } = country

          if (region.length && !regions.includes(region)) {
            regions.push(region)
          }
        })

        regions.sort((a, b) => { return a - b })
      }

      return regions
    },
    countriesByRegion() {
      let { countries } = this

      if (this.filter.length) {
        countries = countries.filter(el => el.region === this.filter)
      }

      return countries
    },
    searchedCountries() {
      let countries = this.countriesByRegion

      if (this.search.length) {
        countries = countries.filter(el => el.name.toLowerCase().search(this.search.toLowerCase()) >= 0)
      }

      return countries
    },
    ...mapState('app', ['countries'])
  }
}
</script>
