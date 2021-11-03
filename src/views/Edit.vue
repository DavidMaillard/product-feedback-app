<template>
  <section class="add-page">
    <a class="back-link" @click.prevent="$router.go(-1)">Go Back</a>
    <section class="add-form">
      <svg class="form-icon" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56"><circle cx="28" cy="28" r="28" fill="url(#a)"/><path fill-rule="evenodd" clip-rule="evenodd" d="m29.082 19.48 3.75-3.48 6.513 6.272-3.548 3.68-6.714-6.471ZM16 39.596c.92-3.942 3.487-14.02 3.487-14.02l8.203-4.822 6.83 6.397-5.218 7.82L16.313 40l6.157-5.79c1.043.39 2.516.038 3.312-.836a2.818 2.818 0 0 0-.177-3.983c-1.149-1.05-3.02-1.05-4.071.098-.783.855-1.053 2.365-.605 3.36L16 39.596Z" fill="#fff"/><defs><radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(129.411 30.466 10.84) scale(93.4169)"><stop stop-color="#E84D70"/><stop offset=".531" stop-color="#A337F6"/><stop offset="1" stop-color="#28A7ED"/></radialGradient></defs></svg>
      <h3 class="form-title">Create New Feedback</h3>
      <section class="input-group">
        <p class="input-label">Feedback Title</p>
        <p class="input-description">Add a short, descriptive headline</p>
        <input v-model="title" type="text" class="form-input" :class="{'has-error': errors.includes('title')}" />
        <p v-if="errors.includes('title')" class="form-error">Can’t be empty</p>
      </section>
      <section class="input-group">
        <p class="input-label">Category</p>
        <p class="input-description">Choose a category for your feedback</p>
        <select v-model="category"  class="form-select" :class="{'has-error': errors.includes('category')}">
          <option :value="null"></option>
          <option v-for="(category, index) in categories" :key="index" :value="category.toLowerCase()">{{ category }}</option>
        </select>
        <p v-if="errors.includes('category')" class="form-error">Can’t be empty</p>
      </section>
      <section class="input-group">
        <p class="input-label">Update Status</p>
        <p class="input-description">Change feature state</p>
        <select v-model="status"  class="form-select">
          <option v-for="status in statuses" :key="status.slug" :value="status.slug">{{ status.title }}</option>
        </select>
      </section>
      <section class="input-group">
        <p class="input-label">Feedback Detail</p>
        <p class="input-description">Include any specific comments on what should be improved, added, etc.</p>
        <textarea v-model="description" class="form-textarea" :class="{'has-error': errors.includes('description')}"></textarea>
        <p v-if="errors.includes('description')" class="form-error">Can’t be empty</p>
      </section>
      <section class="form-buttons">
        <section class="side">
          <button class="button-delete" @click.prevent="removeFeedback">Delete</button>
        </section>
        <section class="side">
          <button class="button-cancel" @click.prevent="$router.go(-1)">Cancel</button>
          <button class="button-submit" @click.prevent="submitForm">Save Changes</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      title: '',
      category: null,
      status: null,
      description: '',
      errors: [],
      categories: ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'],
      statuses: [
        {
          slug: 'suggestion',
          title: 'Suggestion'
        },
        {
          slug: 'planned',
          title: 'Planned'
        },
        {
          slug: 'in-progress',
          title: 'In-Progress'
        },
        {
          slug: 'live',
          title: 'Live'
        }
      ],
    }
  },
  computed: mapState('app', ['productRequests']),
  mounted() {
    const feedback = this.productRequests.find(el => el.id === parseInt(this.$route.params.id, 10))

    this.title = feedback.title
    this.category = feedback.category
    this.status = feedback.status
    this.description = feedback.description
  },
  methods: {
    validateForm() {
      this.errors = []

      if (!this.title.length) {
        this.errors.push('title')
      }

      if (!this.category) {
        this.errors.push('category')
      }

      if (!this.description.length) {
        this.errors.push('description')
      }
    },
    submitForm() {
      this.validateForm()

      if (!this.errors.length) {
        const feedback = this.productRequests.find(el => el.id === parseInt(this.$route.params.id, 10))

        feedback.title = this.title
        feedback.description = this.description
        feedback.category = this.category
        feedback.status = this.status

        this.editFeedback(feedback)

        this.$router.push(`/details/${this.$route.params.id}`)
      }
    },
    removeFeedback() {
      const id = parseInt(this.$route.params.id, 10)
      this.deleteFeedback(id)
      this.$router.push('/')
    },
    ...mapMutations('app', ['editFeedback', 'deleteFeedback'])
  }
}
</script>

<style lang="scss" scoped>
.add-page {
  width: 100%;
  max-width: calc(540px + 2 * 40px);
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 34px 24px 77px;
  }

  .back-link {
    display: flex;
    align-items: center;
    font-family: Jost;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
    margin-bottom: 68px;
    cursor: pointer;

    @media (max-width: 767px) {
      font-size: 13px;
      line-height: 19px;
      margin-bottom: 35px;
    }

    &:before {
      content: '';
      width: 6px;
      height: 8px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDEwIj48cGF0aCBkPSJtNC4zMzQgOS00LTQgNC00IiBzdHJva2U9IiM0NjYxRTYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==");
      margin-right: 16px;
    }
  }

  .add-form {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 52px 42px 40px;

    @media (max-width: 767px) {
      padding: 44px 24px 24px;
    }

    .form-icon {
      position: absolute;
      left: 42px;
      top: 0;
      height: 56px;
      transform: translateY(-50%);

      @media (max-width: 767px) {
        left: 24px;
        height: 40px;
      }
    }

    .form-title {
      font-family: Jost;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: -0.333333px;
      color: #3A4374;
      margin: 0 0 40px;

      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 26px;
        margin-bottom: 24px;
      }
    }

    .input-group {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 24px;

      .input-label {
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.194444px;
        color: #3A4374;
        margin: 0 0 2px;

        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 19px;
          margin-bottom: 3px;
        }
      }

      .input-description {
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #647196;
        margin: 0 0 16px;

        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 19px;
        }
      }

      .form-input, .form-select, .form-textarea {
        width: 100%;
        background-color: #F7F8FD;
        border-radius: 5px;
        padding: 12px 24px;
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #3A4374;
        border: none;
        appearance: none;
        outline-color: #4661E6;

        @media (max-width: 767px) {
          padding: 16px;
          font-size: 13px;
          line-height: 19px;
        }

        &.has-error {
          border: 1px solid #D73737;
          outline: none;
        }
      }

      .form-select {
        background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMCA3Ij48cGF0aCBkPSJtMSAxIDQgNCA0LTQiIHN0cm9rZT0iIzQ2NjFFNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+");
        background-repeat: no-repeat;
        background-size: 8px 8px;
        background-position: center right 24px;
      }

      .form-textarea {
        min-height: 96px;
        padding: 16px 24px;
      }

      .form-error {
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #D73737;
        margin: 4px 0 0;
      }
    }

    .form-buttons {
      margin-top: 16px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 767px) {
        flex-direction: column-reverse;
      }

      .side {
        display: flex;
        align-items: center;

        @media (max-width: 767px) {
          width: 100%;
          flex-direction: column-reverse;
        }
      }

      button {
        border-radius: 10px;
        padding: 12px 24px;
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        color: #F2F4FE;
        transition: all ease-out .2s;
        cursor: pointer;
        border: none;
        appearance: none;

        @media (max-width: 767px) {
          width: 100%;
          font-size: 13px;
          line-height: 19px;
          margin-right: 0;
          padding: 10px;
        }
      }

      .button-delete {
        background-color: #D73737;

        @media (max-width: 767px) {
          margin-top: 16px;
        }

        &:hover {
          background-color: #E98888;
        }
      }

      .button-cancel {
        background-color: #3A4374;
        margin-right: 16px;

        @media (max-width: 767px) {
          margin-right: 0;
        }

        &:hover {
          background-color: #656EA3;
        }
      }

      .button-submit {
        background-color: #AD1FEA;

        @media (max-width: 767px) {
          margin-bottom: 16px;
        }

        &:hover {
          background-color: #C75AF6;
        }
      }
    }
  }
}
</style>
