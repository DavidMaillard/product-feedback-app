<template>
  <section class="job-list-container">
    <section class="job-list">
      <JobItem v-for="job in shownItems" :key="job.id" :job="job" />
    </section>
    <button v-if="filteredItems.length > shownItems.length" class="job-list-button" @click="loadMore">Load More</button>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import JobItem from '@/components/JobItem.vue'

export default {
  components: { JobItem },
  props: {
    jobs: Array
  },
  data() {
    return {
      pagination: 12,
      activePage: 1
    }
  },
  computed: {
    filteredItems() {
      let { jobs } = this
      // Filter by query
      if (this.filters.query.length) {
        jobs = jobs.filter(el => {
          const searchedStrings = []
          searchedStrings.push(el.company)
          searchedStrings.push(el.position)
          searchedStrings.push(el.description)
          searchedStrings.push(el.requirements.content)
          el.requirements.items.forEach(item => { searchedStrings.push(item) })
          searchedStrings.push(el.role.content)
          el.role.items.forEach(item => { searchedStrings.push(item) })

          let foundQuery = false
          searchedStrings.forEach(string => {
            if (string.toLowerCase().indexOf(this.filters.query.toLowerCase()) >= 0) {
              foundQuery = true
            }
          })

          return foundQuery
        })
      }

      // Filter by location
      if (this.filters.location) {
        jobs = jobs.filter(el => el.location === this.filters.location)
      }

      // Filter by type
      if (this.filters.fullTime) {
        jobs = jobs.filter(el => el.contract === 'Full Time')
      }

      return jobs
    },
    shownItems() {
      // Pagination
      const limit = this.pagination * this.activePage

      return this.filteredItems.slice(0, limit)
    },
    ...mapState('app', ['filters'])
  },
  methods: {
    loadMore() {
      this.activePage += 1
    }
  }
}
</script>
