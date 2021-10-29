<template>
  <section class="home-page">
    <FiltersBar />
    <JobList />
  </section>
</template>

<script>
import FiltersBar from '@/components/FiltersBar.vue'
import JobList from '@/components/JobList.vue'

export default {
  components: { FiltersBar, JobList }
}
</script>
