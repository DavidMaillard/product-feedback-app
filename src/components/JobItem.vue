<template>
  <router-link :to="`/${job.id}/${encodeURI(job.position)}`" class="job-item">
    <!-- Job Logo -->
    <section
      class="job-logo-container"
      :style="`background-color: ${job.logoBackground};`"
    >
      <img :src="job.logo" :alt="job.company" class="job-logo" />
    </section>
    <!-- Job Info -->
    <section class="job-info">
      <p class="job-post">
        <span>{{ job.postedAt }}</span>
        <span>{{ job.contract }}</span>
      </p>
      <p class="job-title">{{ job.position }}</p>
      <p class="job-company">{{ job.company }}</p>
    </section>
    <!-- Job Country -->
    <p class="job-country">{{ job.location }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    job: Object
  }
}
</script>
