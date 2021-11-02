<template>
  <div id="app">
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
import { mapState, mapActions, mapGetters } from 'vuex'
// eslint-disable-next-line import/extensions
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
// eslint-disable-next-line import/extensions
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'

export default {
  components: { NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: {
    ...mapActions('app', [
      'closeAddToHomeScreenModalForApple',
      'serviceWorkerSkipWaiting'
    ])
  }
}
</script>

<style lang="scss">
@import '@/theme/app.scss';
body {
  margin: 0;
  background-color: #F7F8FD;

  * {
    box-sizing: border-box;
  }

  #app {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 94px 0 130px;

    @media (max-width: 1023px) {
      margin: 56px 0 115px;
    }

    @media (max-width: 767px) {
      margin: 0;
    }
  }
}
</style>
