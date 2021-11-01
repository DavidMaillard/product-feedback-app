<template>
  <section class="home-page">
    <FiltersBar :jobs="jobs" />
    <JobList :jobs="jobs" />
  </section>
</template>

<script>
import jobsData from '../data.json'
import FiltersBar from '@/components/FiltersBar.vue'
import JobList from '@/components/JobList.vue'

export default {
  components: { FiltersBar, JobList },
  data() {
    return {
      jobs: jobsData
    }
  }
}
</script>
