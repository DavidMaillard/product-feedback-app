<template>
  <header class="header">
    <section class="header-container">
      <h1 class="header-heading">Where in the world?</h1>
      <div class="dark-switcher" @click="setDarkMode(!darkMode)">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.553 13.815c-3.884 0-7.034-2.887-7.034-6.447 0-1.343.448-2.586 1.212-3.618-3.04.945-5.231 3.581-5.231 6.688 0 3.9 3.45 7.062 7.704 7.062 3.389 0 6.266-2.007 7.296-4.796a7.458 7.458 0 01-3.947 1.111z" fill="#fff" stroke="#111517" stroke-width="1.25"/></svg>
        Dark Mode
      </div>
    </section>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['appTitle', 'darkMode'])
  },
  methods: {
    ...mapMutations('app', ['setDarkMode'])
  }
}
</script>
