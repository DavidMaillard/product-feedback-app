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
          @click="selectCategory(category.toLowerCase())"
        >
          {{ category }}
        </div>
      </section>
      <section class="aside-roadmap">
        <section class="roadmap-heading">
          <p class="heading-title">Roadmap</p>
          <router-link to="/roadmap" class="heading-link">View</router-link>
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
          <router-link to="/add" class="bar-button">+ Add Feedback</router-link>
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
          <router-link :to="`/details/${suggestion.id}`" class="suggestion-info">
            <p class="suggestion-title">{{ suggestion.title }}</p>
            <p class="suggestion-description">{{ suggestion.description }}</p>
            <p class="suggestion-category">{{ suggestion.finalCategory }}</p>
          </router-link>
          <section class="suggestion-comments">
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
            <span v-if="suggestion.comments">{{ suggestion.comments.length }}</span>
            <span v-else class="none">0</span>
          </section>
        </article>
      </section>
      <section v-else class="suggestions-none">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 131 137"><g opacity=".5"><path d="M62.827 19.743c-29.116-.006-52.726 23.59-52.74 52.705-.013 29.117 23.576 52.733 52.692 52.753 29.117.021 52.739-23.562 52.767-52.678a52.718 52.718 0 0 0-52.72-52.78Z" stroke="#3A4374" stroke-width="1.045" stroke-linecap="round" stroke-linejoin="round"/><ellipse cx="90.465" cy="55.319" rx="2.436" ry="3.624" fill="#231F20"/><path d="m.892 56.851 123.83-27.405-24.36-7.105S87.167.468 83.645.011c-3.522-.457-67.528 13.195-67.528 13.195l-4.06 30.816L.892 56.852ZM26.673 131.048l-13.997-22.127L73.86 98.456l4.202 21.203 6.212-19.528 31.302 6.181-6.364 24.736h-82.54Z" fill="#3A4374"/><path d="m105.074 83.067 5.64-.781 2.914 21.053a2.68 2.68 0 0 1-2.287 3.022l-.332.046a2.679 2.679 0 0 1-3.021-2.287l-2.914-21.053Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M107.487 104.201a3.198 3.198 0 0 0 3.156 2.751c.14-.001.279-.012.416-.031l.325-.051a3.163 3.163 0 0 0 2.72-3.593l-2.892-21.05a.475.475 0 0 0-.193-.336.508.508 0 0 0-.376-.101l-5.633.781a.507.507 0 0 0-.436.569l2.913 21.061Zm1.005-.142-2.842-20.554 4.628-.589 2.842 20.554a2.171 2.171 0 0 1-1.847 2.446h-.335a2.181 2.181 0 0 1-2.446-1.857Z" fill="#3A4374"/><path fill="#fff" d="m100.742 64.484 9.1-1.26 2.85 20.591-9.1 1.26z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M103.285 85.495a.546.546 0 0 0 .304.101l.061-.01 9.135-1.259a.508.508 0 0 0 .437-.568l-2.853-20.595a.498.498 0 0 0-.568-.436l-9.135 1.259a.538.538 0 0 0-.335.193.494.494 0 0 0-.091.375l2.852 20.605a.454.454 0 0 0 .193.335Zm.741-.985-2.71-19.59 8.12-1.116 2.71 19.59-8.12 1.116Z" fill="#3A4374"/><rect x="105.568" y="99.342" width="9.186" height="36.154" rx="3.248" transform="rotate(-7.88 105.568 99.342)" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M109.568 132.022a3.755 3.755 0 0 0 3.715 3.238l.507.01 2.68-.375a3.756 3.756 0 0 0 3.197-4.223l-4.06-29.435a3.745 3.745 0 0 0-4.222-3.197l-2.68.365a3.775 3.775 0 0 0-2.476 1.452 3.734 3.734 0 0 0-.721 2.781l4.06 29.384Zm1.959-33.008c.125-.01.25-.01.375 0l-.03.01a2.74 2.74 0 0 1 2.7 2.365l4.06 29.435a2.74 2.74 0 0 1-2.335 3.045l-2.679.376a2.75 2.75 0 0 1-3.045-2.335l-4.06-29.435a2.666 2.666 0 0 1 .528-2.03 2.708 2.708 0 0 1 1.806-1.065l2.68-.366Z" fill="#3A4374"/><circle cx="104.564" cy="58.607" r="24.39" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M79.672 59.73c.605 13.297 11.56 23.77 24.871 23.775 1.161 0 2.321-.078 3.472-.233 13.598-1.924 23.081-14.48 21.213-28.085-1.823-13.187-13.691-22.61-26.947-21.394-13.256 1.215-23.214 12.639-22.609 25.937Zm21.572-24.793a24.138 24.138 0 0 1 3.299-.223h.041c11.896.052 21.949 8.833 23.599 20.615a23.894 23.894 0 1 1-26.939-20.392Z" fill="#3A4374"/><circle cx="104.564" cy="58.607" r="19.813" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M84.265 59.328c.377 10.932 9.35 19.6 20.288 19.6.934 0 1.867-.064 2.792-.193 10.835-1.505 18.529-11.324 17.4-22.204-1.13-10.88-10.678-18.91-21.591-18.155-10.913.754-19.266 10.02-18.889 20.952Zm17.599-19.803c.891-.121 1.79-.182 2.689-.183 10.389.023 18.893 8.27 19.234 18.652.341 10.383-7.603 19.17-17.968 19.874-10.364.704-19.424-6.928-20.49-17.262-1.066-10.333 6.245-19.654 16.535-21.08Z" fill="#3A4374"/><path d="M127.858 113.59a14.764 14.764 0 0 0-4.973-4.06c-5.816-3.045-12.485-2.944-18.605-1.015-2.172.69-6.385 1.674-6.608 4.557a2.68 2.68 0 0 0 1.939 2.538c1.11.288 2.27.333 3.4.131a8.774 8.774 0 0 0-4.598 1.158c-1.31.923-2.03 2.943-.954 4.171a3.435 3.435 0 0 0 1.776 1.015 8.115 8.115 0 0 0 4.517-.061c-1.59.305-3.14.792-4.618 1.452-.894.396-1.888 1.096-1.787 2.03.102.934 1.015 1.36 1.848 1.644 1.751.601 3.58.943 5.43 1.015a10.7 10.7 0 0 0-4.415 1.898c-2.03 1.705-2.03 4.943.72 5.867a8.12 8.12 0 0 0 2.72.314c8.12 0 17.844-1.015 23.345-7.774a12.616 12.616 0 0 0 2.599-11.48 11 11 0 0 0-1.736-3.4Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M100.768 136.387a8.568 8.568 0 0 0 2.821.335l.031.02c8.039-.01 18.006-.924 23.761-7.958a13.083 13.083 0 0 0 2.69-11.956 11.66 11.66 0 0 0-1.837-3.533 15.224 15.224 0 0 0-5.147-4.242c-5.46-2.781-12.21-3.157-18.99-1.015l-.65.193-.068.02c-2.416.741-6.014 1.844-6.245 4.78a3.118 3.118 0 0 0 1.939 2.914c-.359.142-.7.326-1.015.548a4.059 4.059 0 0 0-1.645 2.71 2.8 2.8 0 0 0 .6 2.192c.539.588 1.248.993 2.03 1.157.18.054.362.098.547.132l-.72.305c-1.401.659-2.183 1.715-2.03 2.588.152.873.832 1.563 2.182 2.03.991.345 2.01.606 3.045.781a7.58 7.58 0 0 0-2.193 1.269 4.426 4.426 0 0 0-1.522 4.06 3.503 3.503 0 0 0 2.416 2.67Zm-1.431-12.515a20.03 20.03 0 0 1 3.288-1.147c.426-.05.847-.135 1.259-.254a.519.519 0 0 0 .345-.609.508.508 0 0 0-.589-.376 28.46 28.46 0 0 0-1.228.274 7.781 7.781 0 0 1-3.045-.203 2.945 2.945 0 0 1-1.523-.832 1.817 1.817 0 0 1-.365-1.411 3.045 3.045 0 0 1 1.228-2.03 6.25 6.25 0 0 1 2.934-.954c.235-.005.467-.031.696-.057.246-.027.488-.054.725-.054a.518.518 0 0 0 .456-.549.527.527 0 0 0-.538-.466l-.088.006c-.42.028-.857.058-1.302.105a4.928 4.928 0 0 1-1.817-.223 2.203 2.203 0 0 1-1.604-2.03c.183-2.272 3.445-3.256 5.597-3.906l.006-.002.66-.203c6.526-2.03 12.992-1.675 18.219 1.015a14.087 14.087 0 0 1 4.801 3.959 10.635 10.635 0 0 1 1.685 3.217 12.08 12.08 0 0 1-2.517 11.013c-5.481 6.709-15.154 7.582-22.98 7.582a7.316 7.316 0 0 1-2.548-.284 2.478 2.478 0 0 1-1.745-1.898 3.36 3.36 0 0 1 1.187-3.106 10.56 10.56 0 0 1 4.223-1.797.506.506 0 0 0-.112-.994 18.387 18.387 0 0 1-5.288-1.015c-.65-.214-1.421-.477-1.502-1.229-.082-.751 1.004-1.329 1.481-1.542Z" fill="#3A4374"/><path d="M71.262 58.993s12.362 18.574 4.882 18.838c-7.48.264-8.12-1.695-8.12-1.695" fill="#fff"/><path d="M74.804 78.42c-6.273 0-7.176-1.715-7.298-2.03a.538.538 0 0 1 .335-.67.528.528 0 0 1 .66.335s.913 1.573 7.623 1.33a1.715 1.715 0 0 0 1.644-.853c1.603-3.116-4.466-13.449-6.943-17.163a.528.528 0 0 1 .873-.59c.944 1.422 9.135 14.008 7.004 18.27a2.72 2.72 0 0 1-2.538 1.432l-1.36-.061Z" fill="#3A4374"/><ellipse cx="105.69" cy="57.988" rx="4.486" ry="7.643" fill="#C0C5DC"/><ellipse cx="50.789" cy="57.988" rx="3.421" ry="6.181" fill="#3A4374"/></g></svg>
        <p class="none-title">There is no feedback yet.</p>
        <p class="none-text">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <router-link to="/add" class="none-button">+ Add Feedback</router-link>
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
        suggestions = suggestions.map(el => ({
          ...el,
          commentsNumber: typeof(el.comments) === "undefined" ? 0 : el.comments.length
        }))
        suggestions.sort((a, b) => b.commentsNumber - a.commentsNumber)
      }
      else if (this.activeSort === 'Least Comments') {
        suggestions = suggestions.map(el => ({
          ...el,
          commentsNumber: typeof(el.comments) === "undefined" ? 0 : el.comments.length
        }))
        suggestions.sort((a, b) => a.commentsNumber - b.commentsNumber)
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
    selectCategory(category) {
      this.activeCategory = category
      this.mobileOptionsShown = false
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
          text-decoration: none;

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

    .suggestions-none {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #FFFFFF;
      border-radius: 10px;
      padding: 110px 24px;

      @media (max-width: 767px) {
        padding: 76px 24px;
        width: calc(100% - 48px);
        margin: 32px 24px 48px;
      }

      svg {
        height: 136px;
        margin-bottom: 55px;

        @media (max-width: 767px) {
          height: 108px;
          margin-bottom: 40px;
        }
      }

      .none-title {
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        text-align: center;
        letter-spacing: -0.333333px;
        color: #3A4374;
        margin: 0 0 16px;

        @media (max-width: 767px) {
          font-size: 18px;
          line-height: 26px;
          margin-bottom: 14px;
        }
      }

      .none-text {
        max-width: 410px;
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        color: #647196;
        margin: 0 0 48px;

        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 19px;
          margin-bottom: 24px;
        }
      }

      .none-button {
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
}
</style>
