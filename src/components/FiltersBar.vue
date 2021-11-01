<template>
  <div class="header-filters">
    <!-- Filter Bar -->
    <section class="header-filters-bar-container">
      <section class="header-filters-bar">
        <input v-model="search.query" type="search" class="search-input" placeholder="Filter by title, companies, expertise…">
        <input v-model="search.query" type="search" class="search-input-mobile" placeholder="Filter by title…">
        <select v-model="search.location" class="location-input" :class="{'is-placeholder': !search.location}">
          <option :value="false">Filter by location…</option>
          <option v-for="(location, index) in locationsList" :key="index" :value="location">{{ location }}</option>
        </select>
        <label class="type-filter-container">
          <input v-model="search.fullTime" type="checkbox">
          <span>Full Time<span>&nbsp;Only</span></span>
        </label>
        <button class="filter-trigger-mobile" @click="popupActive = true"></button>
        <button class="filter-button" @click="doSearch"><span>Search</span></button>
      </section>
    </section>
    <!-- Filter Popup -->
    <section class="header-filters-popup" :class="{'is-active': popupActive}">
      <div class="popup-overlay" @click="popupActive = false"></div>
      <section class="popup-container">
        <select v-model="search.location" class="location-input" :class="{'is-placeholder': !search.location}">
          <option :value="false">Filter by location…</option>
          <option v-for="(location, index) in locationsList" :key="index" :value="location">{{ location }}</option>
        </select>
        <label class="type-filter-container">
          <input v-model="search.fullTime" type="checkbox">
          <span>Full Time<span>&nbsp;Only</span></span>
        </label>
        <button class="filter-button" @click="doSearch">Search</button>
      </section>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    jobs: Array
  },
  data() {
    return {
      popupActive: false,
      search: {
        query: '',
        location: false,
        fullTime: false
      }
    }
  },
  computed: {
    locationsList() {
      const locations = this.jobs.map(el => el.location)

      const finalLocations = []
      locations.forEach(location => {
        if (!finalLocations.includes(location)) {
          finalLocations.push(location)
        }
      })

      return finalLocations.sort()
    },
    ...mapState('app', ['filters'])
  },
  mounted() {
    this.search = this.filters
  },
  methods: {
    doSearch() {
      this.popupActive = false
      this.setFilters(this.search)
    },
    ...mapMutations('app', ['setFilters'])
  }
}
</script>
