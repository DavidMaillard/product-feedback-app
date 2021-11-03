<template>
  <section class="details-page">
    Details Page
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['productRequests'])
  }
}
</script>

<style lang="scss" scoped>
.details-page {
  width: 100%;
  max-width: calc(1110px + 2 * 40px);
  padding: 0 40px;
  display: flex;
  align-items: center;
}
</style>
