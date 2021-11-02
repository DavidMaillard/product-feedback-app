<template>
  <section class="home-page">
    <section class="aside-heading-mobile" :class="{'is-active': mobileOptionsShown}" @click="mobileOptionsShown = !mobileOptionsShown">
      <p class="heading-title">Frontend Mentor</p>
      <p class="heading-text">Feedback Board</p>
    </section>
    <div v-if="mobileOptionsShown" class="mobile-overlay"></div>
    <section class="page-left-side" :class="{'is-active': mobileOptionsShown}">
      <section class="aside-heading">
        <p class="heading-title">Frontend Mentor</p>
        <p class="heading-text">Feedback Board</p>
      </section>
      <section class="aside-categories">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="aside-category"
          :class="{ 'is-active': activeCategory === category.toLowerCase() }"
          @click="activeCategory = category.toLowerCase()"
        >
          {{ category }}
        </div>
      </section>
      <section class="aside-roadmap">
        <section class="roadmap-heading">
          <p class="heading-title">Roadmap</p>
          <routerlink to="/" class="heading-link">View</routerlink>
        </section>
        <section class="roadmap-statuses">
          <section v-for="(status, index) in statuses" :key="index" class="roadmap-status" :class="status.color">
            <p class="status-name">{{ status.title }}</p>
            <p class="status-number">{{ getFeedbacksByStatus(status.slug) }}</p>
          </section>
        </section>
      </section>
    </section>
    <section class="page-right-side">
      <section class="main-bar">
        <section class="left-side">
          <section class="bar-heading">
            <svg class="heading-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 24"><g clip-path="url(#a)"><path d="M11.5 2.274c2.237 0 4.339.854 5.924 2.408a8.123 8.123 0 0 1 2.464 5.839 8.084 8.084 0 0 1-1.7 4.979 8.457 8.457 0 0 1-3.652 2.71l-.31.112.003.826h.369c.262 0 .474.21.474.468a.47.47 0 0 1-.389.462l-.085.007h-.365l.004 1.02h.36c.263 0 .476.21.476.469a.47.47 0 0 1-.39.461l-.085.008h-.357l.005 1.486a.465.465 0 0 1-.381.462L13.77 24H9.23a.478.478 0 0 1-.466-.378l-.01-.093.006-1.486h-.357a.472.472 0 0 1-.475-.47.47.47 0 0 1 .39-.46l.085-.008h.361l.004-1.02h-.365a.472.472 0 0 1-.475-.469.47.47 0 0 1 .39-.46l.085-.008h.368l.004-.826a8.452 8.452 0 0 1-3.996-2.867 8.08 8.08 0 0 1-1.666-5.056c.032-2.127.923-4.152 2.511-5.7 1.508-1.471 3.448-2.322 5.493-2.416l.324-.009h.06Zm1.791 19.769H9.709l-.004 1.02h3.59l-.004-1.02Zm-.008-1.958H9.716l-.003 1.02h3.574l-.004-1.02ZM11.5 3.212h-.054c-3.946.027-7.327 3.325-7.384 7.2-.048 3.266 2.14 6.192 5.322 7.118.174.05.3.193.332.364l.008.088-.004 1.166h3.56l-.004-1.166a.47.47 0 0 1 .34-.452c3.134-.912 5.323-3.794 5.323-7.01a7.197 7.197 0 0 0-2.185-5.173A7.453 7.453 0 0 0 11.5 3.212Zm.829 1.782a.4.4 0 0 1 .401.397v.322c.48.12.932.307 1.346.552l.228-.226a.405.405 0 0 1 .569 0L16.046 7.2a.393.393 0 0 1 0 .56l-.23.228c.247.41.437.858.557 1.333h.323a.4.4 0 0 1 .402.397v1.645a.4.4 0 0 1-.401.396h-.324c-.12.476-.31.924-.557 1.333l.23.228a.393.393 0 0 1 0 .56l-1.173 1.163a.405.405 0 0 1-.57 0l-.227-.227a5.022 5.022 0 0 1-1.346.553v.322a.4.4 0 0 1-.401.396H10.67a.4.4 0 0 1-.401-.397v-.321a5.022 5.022 0 0 1-1.346-.553l-.228.227a.405.405 0 0 1-.569 0L6.954 13.88a.393.393 0 0 1 0-.56l.23-.228a4.924 4.924 0 0 1-.557-1.332h-.324a.4.4 0 0 1-.401-.397V9.719a.4.4 0 0 1 .401-.397h.324c.12-.475.31-.923.557-1.333l-.23-.228a.393.393 0 0 1 0-.56L8.127 6.04a.405.405 0 0 1 .569 0l.228.226a5.02 5.02 0 0 1 1.346-.552V5.39a.4.4 0 0 1 .401-.397h1.658ZM11.5 7.721c-1.572 0-2.846 1.263-2.846 2.82 0 1.558 1.274 2.82 2.846 2.82s2.846-1.262 2.846-2.82c0-1.557-1.274-2.82-2.846-2.82Zm11.025 4.152c.263 0 .475.21.475.469a.47.47 0 0 1-.39.461l-.085.008h-.498a.472.472 0 0 1-.475-.469.47.47 0 0 1 .39-.461l.085-.008h.498Zm-21.552 0c.262 0 .475.21.475.469a.47.47 0 0 1-.39.461l-.085.008H.475A.472.472 0 0 1 0 12.342a.47.47 0 0 1 .39-.461l.085-.008h.498ZM3.112 3.45l.074.06.46.451c.185.183.186.48 0 .663a.476.476 0 0 1-.596.062l-.075-.06-.459-.451a.465.465 0 0 1-.001-.663.48.48 0 0 1 .597-.062Zm17.373.062c.162.16.182.408.06.59l-.061.073-.46.45a.477.477 0 0 1-.67 0 .464.464 0 0 1-.06-.59l.06-.074.46-.45a.48.48 0 0 1 .671 0ZM11.5 0c.233 0 .427.166.467.384l.008.085v.49a.472.472 0 0 1-.475.468.473.473 0 0 1-.467-.384l-.008-.084v-.49c0-.26.213-.469.475-.469Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h23v24H0z"/></clipPath></defs></svg>
            <p class="heading-text">{{ suggestions.length }} Suggestion{{ suggestions.length > 1 ? 's' : '' }}</p>
          </section>
          <section class="bar-sorting">
            <p class="sorting-label" :class="{'is-active': sortingOptionsShown}" @click="sortingOptionsShown = !sortingOptionsShown">Sort by: <strong>{{ activeSort }}</strong></p>
            <section v-if="sortingOptionsShown" class="sorting-options">
              <div
                v-for="(option, index) in sortingOptions"
                :key="index"
                class="sorting-option"
                :class="{'is-active': activeSort === option}"
                @click="selectSortingOption(option)"
              >
                {{ option }}
              </div>
            </section>
          </section>
        </section>
        <section class="right-side">
          <router-link to="/" class="bar-button">+ Add Feedback</router-link>
        </section>
      </section>
      <section v-if="suggestions.length" class="suggestions-list">
        <article v-for="suggestion in suggestions" :key="suggestion.id" class="suggestion-item">
          <section class="suggestion-upvotes-container">
            <section class="suggestion-upvotes">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7"><path d="m1.334 6 4-4 4 4" stroke="#4661E6" stroke-width="2"/></svg>
              <span>{{ suggestion.upvotes }}</span>
            </section>
            </section>
          <section class="suggestion-info">
            <p class="suggestion-title">{{ suggestion.title }}</p>
            <p class="suggestion-description">{{ suggestion.description }}</p>
            <p class="suggestion-category">{{ suggestion.finalCategory }}</p>
          </section>
          <section class="suggestion-comments">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
            <span v-if="suggestion.comments">{{ suggestion.comments.length }}</span>
            <span v-else class="none">0</span>
          </section>
        </article>
      </section>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      mobileOptionsShown: false,
      categories: ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'],
      activeCategory: 'all',
      statuses: [
        {
          slug: 'planned',
          title: 'Planned',
          color: 'orange'
        },
        {
          slug: 'in-progress',
          title: 'In-Progress',
          color: 'pink'
        },
        {
          slug: 'live',
          title: 'Live',
          color: 'blue'
        }
      ],
      activeSort: 'Most Upvotes',
      sortingOptions: ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'],
      sortingOptionsShown: false
    }
  },
  computed: {
    suggestions() {
      let suggestions = this.productRequests.filter(el => el.status === 'suggestion')

      // Filters
      if (this.activeCategory !== 'all') {
        suggestions = suggestions.filter(el => el.category === this.activeCategory)
      }

      // Sorting
      if (this.activeSort === 'Most Upvotes') {
        suggestions.sort((a, b) => b.upvotes - a.upvotes)
      }
      else if (this.activeSort === 'Least Upvotes') {
        suggestions.sort((a, b) => a.upvotes - b.upvotes)
      }
      else if (this.activeSort === 'Most Comments') {
        suggestions.sort((a, b) => b.comments.length - a.comments.length)
      }
      else if (this.activeSort === 'Least Upvotes') {
        suggestions.sort((a, b) => a.comments.length - b.comments.length)
      }

      suggestions = suggestions.map(el => {
        return {
          ...el,
          finalCategory: el.category.length <= 2 ? el.category.toUpperCase() : el.category.charAt(0).toUpperCase() + el.category.slice(1)
        }
      })

      return suggestions
    },
    ...mapState('app', ['productRequests'])
  },
  methods: {
    getFeedbacksByStatus(status) {
      return this.productRequests.filter(el => el.status === status).length
    },
    selectSortingOption(option) {
      this.activeSort = option
      this.sortingOptionsShown = false
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  max-width: calc(1110px + 2 * 40px);
  padding: 0 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1023px) {
    flex-direction: column;
  }

  @media (max-width: 767px) {
    padding: 0;
  }

  .aside-heading-mobile {
    display: none;

    @media (max-width: 767px) {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 16px 24px;
      background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzUgNzIiPjxwYXRoIGZpbGw9InVybCgjYSkiIGQ9Ik0wIDBoMzc1djcySDB6Ii8+PG1hc2sgaWQ9ImIiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIzNzUiIGhlaWdodD0iNzIiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMzc1djcySDB6Ii8+PC9tYXNrPjxnIG1hc2s9InVybCgjYikiPjxnIG9wYWNpdHk9Ii43NjUiIGZpbHRlcj0idXJsKCNjKSI+PGVsbGlwc2UgY3g9Ii01NS41MDciIGN5PSItMjEuMDM0IiByeD0iMTQxLjM4NSIgcnk9IjUwLjU2MiIgZmlsbD0iIzdBRDhGQiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjZCkiPjxlbGxpcHNlIGN4PSI0NjguNDY2IiBjeT0iNzIuODA5IiByeD0iMTQxLjM4NSIgcnk9IjUwLjU2MiIgZmlsbD0iI0ZCQjU3QSIvPjwvZz48L2c+PGRlZnM+PGZpbHRlciBpZD0iYyIgeD0iLTI4Ni41OTUiIHk9Ii0xNjEuMjk5IiB3aWR0aD0iNDYyLjE3NyIgaGVpZ2h0PSIyODAuNTMiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ0Ljg1MiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzA6NDUyIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZCIgeD0iMjM3LjM3OCIgeT0iLTY3LjQ1NiIgd2lkdGg9IjQ2Mi4xNzciIGhlaWdodD0iMjgwLjUzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+PGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0NC44NTIiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl8wOjQ1MiIvPjwvZmlsdGVyPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgxNjYuODQ5IDE5NS4yNDQgMTguNzE3KSBzY2FsZSg0MDcuODU1IDE4NC4yMTgpIj48c3RvcCBzdG9wLWNvbG9yPSIjRTg0RDcwIi8+PHN0b3Agb2Zmc2V0PSIuNTMxIiBzdG9wLWNvbG9yPSIjQTMzN0Y2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjhBN0VEIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+");
      background-size: cover;

      &:after {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNyI+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTAgMGgyMHYzSDB6TTAgN2gyMHYzSDB6TTAgMTRoMjB2M0gweiIvPjwvZz48L3N2Zz4=");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
      }

      &.is-active:after {
        background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOCAxNyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDYuMzc5IDIuOTkuMzY5Ljg2NyAyLjQ4OGw2LjAxIDYuMDEtNi4wMSA2LjAxMSAyLjEyMSAyLjEyMkw5IDEwLjYyMmw2LjAxMSA2LjAxIDIuMTIyLTIuMTIyLTYuMDEtNi4wMSA2LjAxLTYuMDFMMTUuMDEuMzY3IDkgNi4zNzhaIiBmaWxsPSIjZmZmIi8+PC9zdmc+");
        background-size: 16px 16px;
      }

      .heading-title {
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 22px;
        letter-spacing: -0.1875px;
        color: #FFFFFF;
        margin: 0;
      }

      .heading-text {
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 19px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.75;
        margin: 0;
      }
    }
  }

  .mobile-overlay {
    position: absolute;
    top: 73px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    z-index: 10;
  }

  .page-left-side {
    width: 255px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin-right: 30px;

    @media (max-width: 1023px) {
      width: 100%;
      flex-direction: row;
      align-items: stretch;
      justify-content: space-between;
      margin-right: 0;
      margin-bottom: 40px;
    }

    @media (max-width: 767px) {
      display: none;

      &.is-active {
        position: absolute;
        top: 73px;
        right: 0;
        bottom: 0;
        overflow-y: scroll;
        background: #F7F8FD;
        padding: 24px;
        width: 271px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        z-index: 11;
        margin-bottom: 0;
      }
    }

    .aside-heading {
      height: 137px;
      padding: 24px;
      background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTUgMTM3Ij48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDI1NXYxMzdIMHoiLz48bWFzayBpZD0iYiIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjI1NSIgaGVpZ2h0PSIxMzciPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjU1djEzN0gweiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48ZyBvcGFjaXR5PSIuNzY1IiBmaWx0ZXI9InVybCgjYykiPjxjaXJjbGUgY3g9Ii0uNSIgY3k9Ii00MC41IiByPSI5NiIgZmlsbD0iIzdBRDhGQiIvPjwvZz48ZyBmaWx0ZXI9InVybCgjZCkiPjxjaXJjbGUgY3g9IjMwNC41IiBjeT0iMTM3LjUiIHI9Ijk2IiBmaWxsPSIjRkJCNTdBIi8+PC9nPjwvZz48ZGVmcz48ZmlsdGVyIGlkPSJjIiB4PSItMTg2LjIwMyIgeT0iLTIyNi4yMDMiIHdpZHRoPSIzNzEuNDA3IiBoZWlnaHQ9IjM3MS40MDciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ0Ljg1MiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzA6MjMzMyIvPjwvZmlsdGVyPjxmaWx0ZXIgaWQ9ImQiIHg9IjExOC43OTciIHk9Ii00OC4yMDMiIHdpZHRoPSIzNzEuNDA3IiBoZWlnaHQ9IjM3MS40MDciIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUJsZW5kIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJzaGFwZSIvPjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQ0Ljg1MiIgcmVzdWx0PSJlZmZlY3QxX2ZvcmVncm91bmRCbHVyXzA6MjMzMyIvPjwvZmlsdGVyPjxyYWRpYWxHcmFkaWVudCBpZD0iYSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgxNDYuODIzIDEzNC41OTIgMzIuMzQ4KSBzY2FsZSgzMjIuNjY2IDMwMS4yODgpIj48c3RvcCBzdG9wLWNvbG9yPSIjRTg0RDcwIi8+PHN0b3Agb2Zmc2V0PSIuNTMxIiBzdG9wLWNvbG9yPSIjQTMzN0Y2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjhBN0VEIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PC9zdmc+");
      background-size: cover;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      margin-bottom: 24px;

      @media (max-width: 1023px) {
        width: calc((100% - 20px) / 3);
        height: auto;
        margin-bottom: 0;
      }

      @media (max-width: 767px) {
        display: none;
      }

      .heading-title {
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 29px;
        letter-spacing: -0.25px;
        color: #FFFFFF;
        margin: 0;
      }

      .heading-text {
        font-family: Jost;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.75;
        margin: 0;
      }
    }

    .aside-categories {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 10px 24px 24px 24px;
      background: #FFFFFF;
      border-radius: 10px;
      margin-bottom: 24px;

      @media (max-width: 1023px) {
        width: calc((100% - 20px) / 3);
        margin-bottom: 0;
        align-items: flex-start;
        justify-content: flex-start;
      }

      @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 24px;
      }

      .aside-category {
        background-color: #F2F4FF;
        border-radius: 10px;
        padding: 5px 16px;
        font-family: Jost;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 19px;
        color: #4661E6;
        margin: 14px 14px 0 0;
        cursor: pointer;

        @media (max-width: 1023px) {
          margin: 14px 8px 0 0;
        }

        &.is-active {
          background-color: #4661E6;
          color: #FFF;
        }

        &:not(.is-active):hover {
          background-color: #CFD7FF;
        }
      }
    }

    .aside-roadmap {
      width: 100%;
      display: flex;
      flex-direction: column;
      background: #FFFFFF;
      border-radius: 10px;
      padding: 24px;

      @media (max-width: 1023px) {
        width: calc((100% - 20px) / 3);
      }

      @media (max-width: 767px) {
        width: 100%;
      }

      .roadmap-heading {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;

        .heading-title {
          font-family: Jost;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.25px;
          color: #3A4374;
          margin: 0;
        }

        .heading-link {
          font-family: Jost;
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          line-height: 19px;
          text-decoration-line: underline;
          color: #8397F8;
          cursor: pointer;
        }
      }

      .roadmap-statuses {
        width: 100%;
        display: flex;
        flex-direction: column;

        .roadmap-status {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;

          &:before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 8px;
            height: 8px;
            border-radius: 8px;
            background-color: #647196;
          }

          &:last-child {
            margin-bottom: 0;
          }

          &.orange:before {
            background-color: #F49F85;
          }

          &.pink:before {
            background-color: #AD1FEA;
          }

          &.blue:before {
            background-color: #62BCFA;
          }

          .status-name {
            padding-left: 24px;
            font-family: Jost;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 23px;
            color: #647196;
            margin: 0;
          }

          .status-number {
            font-family: Jost;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 23px;
            text-align: right;
            color: #647196;
            margin: 0;
          }
        }
      }
    }
  }

  .page-right-side {
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: 1023px) {
      width: 100%;
    }

    .main-bar {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 16px 14px 24px;
      background: #373F68;
      border-radius: 10px;
      margin-bottom: 24px;

      @media (max-width: 767px) {
        border-radius: 0;
        padding: 8px 24px;
        margin-bottom: 0;
      }

      .left-side {
        display: flex;
        align-items: center;

        .bar-heading {
          display: flex;
          align-items: center;
          margin-right: 38px;

          @media (max-width: 767px) {
            display: none;
          }

          .heading-icon {
            height: 24px;
            margin-right: 16px;
          }

          .heading-text {
            font-family: Jost;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.25px;
            color: #FFFFFF;
            margin: 0;
          }
        }

        .bar-sorting {
          position: relative;

          .sorting-label {
            display: flex;
            align-items: center;
            font-family: Jost;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #F2F4FE;
            mix-blend-mode: normal;
            opacity: 0.75;
            margin: 0;
            cursor: pointer;

            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 19px;
            }

            &.is-active:after {
              transform: none;
            }

            &:after {
              content: '';
              display: flex;
              width: 8px;
              height: 4px;
              margin-left: 8px;
              background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5IDciPjxwYXRoIGQ9Im0xIDYgNC00IDQgNCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=");
              background-position: center center;
              background-size: contain;
              background-repeat: no-repeat;
              transform: rotate(180deg);
            }

            strong {
              margin-left: 4px;
            }
          }

          .sorting-options {
            position: absolute;
            left: 0;
            top: 60px;
            min-width: 255px;
            background: #FFFFFF;
            box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
            border-radius: 10px;
            z-index: 5;

            .sorting-option {
              position: relative;
              padding: 12px 24px;
              border-bottom: 1px solid rgba(#3A4374, .15);
              font-family: Jost;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 23px;
              color: #647196;
              cursor: pointer;

              &.is-active {
                background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMyAxMCI+PHBhdGggZD0iTS45NjggNC44NTkgNC41IDguMzkgMTIgLjg5IiBzdHJva2U9IiNBRDFGRUEiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==");
                background-size: 12px 8px;
                background-repeat: no-repeat;
                background-position: center right 24px;
              }

              &:not(.is-active):hover {
                color: #AD1FEA;
              }
            }
          }
        }
      }

      .right-side {
        display: flex;

        .bar-button {
          background-color: #AD1FEA;
          border-radius: 10px;
          padding: 12px 24px;
          font-family: Jost;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 20px;
          color: #F2F4FE;
          text-decoration: none;

          &:hover {
            background-color: #C75AF6;
          }

          @media (max-width: 767px) {
            padding: 10px 16px;
            font-size: 13px;
            line-height: 19px;
          }
        }
      }
    }

    .suggestions-list {
      width: 100%;
      display: flex;
      flex-direction: column;

      @media (max-width: 767px) {
        padding: 32px 24px 55px;
      }

      .suggestion-item {
        width: 100%;
        display: flex;
        align-items: stretch;
        background: #FFFFFF;
        border-radius: 10px;
        padding: 28px 32px;
        margin-bottom: 20px;

        @media (max-width: 767px) {
          padding: 24px;
          margin-bottom: 16px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
        }

        &:last-child {
          margin-bottom: 0;
        }

        .suggestion-upvotes-container {
          display: flex;
          align-items: flex-start;
          flex-shrink: 0;
          margin-right: 40px;

          @media (max-width: 767px) {
            order: 2;
            margin-right: 0;
          }

          .suggestion-upvotes {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #F2F4FE;
            border-radius: 10px;
            width: 40px;
            padding: 14px 0;
            cursor: pointer;

            @media (max-width: 767px) {
              width: auto;
              padding: 6px 12px 6px 16px;
              flex-direction: row;
            }

            &:hover {
              background: #CFD7FF;
            }

            svg {
              height: 8px;
              margin-bottom: 8px;

              @media (max-width: 767px) {
                margin-bottom: 0;
                margin-right: 10px;
              }
            }

            span {
              font-family: Jost;
              font-style: normal;
              font-weight: bold;
              font-size: 13px;
              line-height: 19px;
              text-align: center;
              letter-spacing: -0.180556px;
              color: #3A4374;
            }
          }
        }

        .suggestion-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          @media (max-width: 767px) {
            order: 1;
            width: 100%;
            margin-bottom: 16px;
            flex: none;
          }

          .suggestion-title {
            font-family: Jost;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 26px;
            letter-spacing: -0.25px;
            color: #3A4374;
            margin: 0 0 4px;

            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 19px;
              margin-bottom: 8px;
            }
          }

          .suggestion-description {
            font-family: Jost;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 23px;
            color: #647196;
            margin: 0 0 12px;

            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 19px;
              margin-bottom: 8px;
            }
          }

          .suggestion-category {
            background-color: #F2F4FF;
            border-radius: 10px;
            padding: 5px 16px;
            font-family: Jost;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 19px;
            color: #4661E6;
            margin: 0;
          }
        }

        .suggestion-comments {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 40px;
          flex-shrink: 0;

          @media (max-width: 767px) {
            order: 3;
            margin-left: 0;
          }

          svg {
            height: 16px;
            margin-right: 8px;
          }

          span {
            font-family: Jost;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 23px;
            text-align: center;
            letter-spacing: -0.222222px;
            color: #3A4374;

            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 19px;
            }

            &.none {
              mix-blend-mode: normal;
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
}
</style>
