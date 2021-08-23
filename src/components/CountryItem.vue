<template>
  <router-link :to="countryLink" class="country-item">
    <section class="country-flag-container">
      <img :src="country.flag" :alt="country.name" class="country-flag" />
    </section>
    <section class="country-infos">
      <h3 class="country-name">{{ country.name }}</h3>
      <p class="country-info"><strong>Popuation: </strong>{{ country.population }}</p>
      <p class="country-info"><strong>Region: </strong>{{ country.region }}</p>
      <p class="country-info"><strong>Capital: </strong>{{ country.capital }}</p>
    </section>
  </router-link>
</template>

<script>
export default {
  props: {
    country: Object
  },
  computed: {
    countryLink() {
      return `/country/${this.country.alpha3Code.toLowerCase()}`
    }
  }
}
</script>
