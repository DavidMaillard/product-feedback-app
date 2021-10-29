<template>
  <div id="app" :class="{darkMode}">
    <nav-bar></nav-bar>
    <router-view />

    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    >
    </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
// eslint-disable-next-line import/extensions
import NavBar from '@/components/NavBar'
// eslint-disable-next-line import/extensions
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
// eslint-disable-next-line import/extensions
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'

export default {
  components: { NavBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp', 'darkMode'])
  },
  methods: {
    ...mapActions('app', [
      'closeAddToHomeScreenModalForApple',
      'serviceWorkerSkipWaiting'
    ]),
    ...mapMutations('app', [
      'setCountries'
    ])
  },
  async mounted() {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    .then(data => data.json())

    this.setCountries(response)
  }
}
</script>

<style lang="scss">
@import '@/theme/app.scss';
body {
  margin: 0;

  * {
    box-sizing: border-box;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: $fontKumbh;
    color: var(--text-color);
    background-color: var(--app-bg-color);

    .main-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      background-color: var(--app-light);

      .main-container {
        width: 100%;
        max-width: 1320px;
        padding: 50px 20px;
      }
    }
  }
}
</style>
