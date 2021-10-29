<template>
  <section class="job-list-container">
    <section class="job-list">
      <JobItem v-for="job in shownItems" :key="job.id" :job="job" />
    </section>
  </section>
</template>

<script>
import jobsData from '../data.json'
import JobItem from '@/components/JobItem.vue'

export default {
  components: { JobItem },
  data() {
    return {
      jobs: jobsData,
      pagination: 12,
      activePage: 1
    }
  },
  computed: {
    shownItems() {
      // Filters search logic here
      // ...

      // Pagination
      const limit = this.pagination * this.activePage

      return this.jobs.slice(0, limit)
    }
  }
}
</script>
