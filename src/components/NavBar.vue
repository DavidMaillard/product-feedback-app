<template>
  <header class="header">
    <!-- Top Header -->
    <section class="top-header">
      <router-link to="/" class="header-logo">
        <img src="@/assets/desktop/logo.svg" alt="devjobs">
      </router-link>
      <section class="app-mode-switcher-container" @click="setDarkMode(!darkMode)">
        <!-- Sun -->
        <svg class="sun" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 19"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.365c-.33 0-.612-.295-.612-.639V.836c0-.343.282-.638.612-.638s.612.295.612.638v1.89c0 .344-.282.639-.612.639ZM6.402 5.952A5.314 5.314 0 0 1 10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 0 1-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35ZM3.059 3.71l1.483 1.438c.296.261.728.261.97 0a.649.649 0 0 0 0-.941L4.03 2.769a.698.698 0 0 0-.97 0 .649.649 0 0 0 0 .941ZM.66 8.906h1.948c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594Zm4.853 4.946a.698.698 0 0 0-.97 0L3.059 15.29a.649.649 0 0 0 0 .941c.27.261.701.261.97 0l1.483-1.438a.649.649 0 0 0 0-.94ZM10 15.635c.33 0 .612.295.612.639v1.89c0 .343-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639Zm6.94-.345-1.482-1.438c-.296-.261-.728-.261-.97 0a.649.649 0 0 0 0 .941l1.482 1.438c.27.261.701.261.97 0a.649.649 0 0 0 0-.941Zm-.205-5.79c0-.32.303-.594.658-.594h1.949c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594Zm-2.247-4.352c.27.261.7.261.97 0l1.483-1.438a.649.649 0 0 0 0-.941.698.698 0 0 0-.97 0l-1.483 1.438a.649.649 0 0 0 0 .94Z" fill="#fff"/></svg>
        <section class="app-mode-switcher" :class="{isDarkMode: darkMode}"></section>
        <!-- Moon -->
        <svg class="moon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 0a6.02 6.02 0 0 0-4.232 1.768A5.89 5.89 0 0 0 0 6a6.02 6.02 0 0 0 1.768 4.232A5.89 5.89 0 0 0 6 12a6.02 6.02 0 0 0 4.232-1.768A6.02 6.02 0 0 0 12 6c0-.185-.009-.369-.026-.55A4.034 4.034 0 0 1 8 9a3.927 3.927 0 0 1-2.821-1.179A4.013 4.013 0 0 1 4 5c0-1.095.442-2.105 1.179-2.821A4.013 4.013 0 0 1 8 1c.716 0 1.397.19 1.982.527A5.903 5.903 0 0 0 6 0Z" fill="#fff"/></svg>
      </section>
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
