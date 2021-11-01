<template>
  <section class="details-page">
    <!-- Company Info -->
    <section class="details-company-container">
      <section class="details-company">
        <!-- Company Logo -->
        <section
          class="job-logo-container"
          :style="`background-color: ${job.logoBackground};`"
        >
          <img :src="job.logo" :alt="job.company" class="job-logo" />
        </section>
        <!-- Company Info -->
        <section class="company-info">
          <h3 class="company-name">{{ job.company }}</h3>
          <h3 class="company-website">{{ job.website.slice(8) }}</h3>
        </section>
        <!-- Company Link -->
        <section class="company-link-section">
          <a :href="job.website" class="company-link" target="_blank">Company Site</a>
        </section>
      </section>
    </section>
    <!-- Job Details -->
    <section class="details-job-container">
      <section class="details-job">
        <!-- Job Top Details -->
        <section class="details-top-info">
          <section class="left-side">
            <p class="job-post">
              <span>{{ job.postedAt }}</span>
              <span>{{ job.contract }}</span>
            </p>
            <p class="job-title">{{ job.position }}</p>
            <p class="job-country">{{ job.location }}</p>
          </section>
          <section class="right-side">
            <a :href="job.apply" class="apply-button">Apply Now</a>
          </section>
        </section>
        <!-- Job Description -->
        <p class="job-description">{{ job.description }}</p>
        <!-- Job Requirements -->
        <p class="job-requirements-title">Requirements</p>
        <p class="job-requirements-text">{{ job.requirements.content }}</p>
        <ul class="job-requirements-list">
          <li v-for="(item, index) in job.requirements.items" :key="index">{{ item }}</li>
        </ul>
        <!-- Job role -->
        <p class="job-requirements-title">What You Will Do</p>
        <p class="job-requirements-text">{{ job.role.content }}</p>
        <ul class="job-requirements-list">
          <li v-for="(item, index) in job.role.items" :key="index">{{ item }}</li>
        </ul>
      </section>
    </section>
    <!-- Job Application -->
    <section class="job-application-section">
      <section class="job-application-container">
        <section class="job-application">
          <section class="left-side">
            <p class="application-title">{{ job.position }}</p>
            <p class="application-company">{{ job.company }}</p>
          </section>
          <section class="right-side">
            <a :href="job.apply" class="apply-button">Apply Now</a>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import jobsData from '../data.json'

export default {
  data() {
    return {
      jobs: jobsData
    }
  },
  computed: {
    job() {
      const { id } = this.$route.params

      return this.jobs.find(el => el.id === parseInt(id, 10))
    }
  }
}
</script>
