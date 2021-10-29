<template>
  <div class="header-filters">
    <!-- Filter Bar -->
    <section class="header-filters-bar-container">
      <section class="header-filters-bar">
        <input type="search" class="search-input" placeholder="Filter by title, companies, expertise…">
        <input type="search" class="search-input-mobile" placeholder="Filter by title…">
        <input type="search" class="location-input" placeholder="Filter by location…">
        <label class="type-filter-container">
          <input type="checkbox">
          <span>Full Time<span>&nbsp;Only</span></span>
        </label>
        <button class="filter-trigger-mobile" @click="popupActive = true"></button>
        <button class="filter-button"><span>Search</span></button>
      </section>
    </section>
    <!-- Filter Popup -->
    <section class="header-filters-popup" :class="{'is-active': popupActive}">
      <div class="popup-overlay" @click="popupActive = false"></div>
      <section class="popup-container">
        <input type="search" class="location-input" placeholder="Filter by location…">
        <label class="type-filter-container">
          <input type="checkbox">
          <span>Full Time<span>&nbsp;Only</span></span>
        </label>
        <button class="filter-button">Search</button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popupActive: false
    }
  }
}
</script>
