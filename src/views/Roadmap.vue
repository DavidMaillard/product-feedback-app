<template>
  <section class="roadmap-page">
    <section class="top-bar">
      <section class="left-side">
        <a class="back-link" @click.prevent="$router.go(-1)">Go Back</a>
        <p class="bar-heading">Roadmap</p>
      </section>
      <section class="right-side">
        <router-link to="/add" class="bar-button">+ Add Feedback</router-link>
      </section>
    </section>
    <section class="roadmap-mobile-menu">
      <section
        v-for="status in statuses"
        :key="status.slug"
        class="mobile-menu-item"
        :class="[status.color, { 'is-active': activeStatus === status.slug }]"
        @click="activeStatus = status.slug"
      >
        <p class="item-title">{{ status.title }} ({{ getFeedbacksByStatus(status.slug).length }})</p>
      </section>
    </section>
    <section class="roadmap">
      <section v-for="status in statuses" :key="status.slug" class="roadmap-column" :class="{'is-active': activeStatus === status.slug}">
        <section class="column-header">
          <p class="header-title">{{ status.title }} ({{ getFeedbacksByStatus(status.slug).length }})</p>
          <p class="header-description">{{ status.description }}</p>
        </section>
        <section class="feedbacks-list">
          <article v-for="feedback in getFeedbacksByStatus(status.slug)" :key="feedback.id" class="feedback-item" :class="feedback.fullStatus.color">
            <router-link :to="`/details/${feedback.id}`" class="feedback-info">
              <p class="feedback-status" :class="feedback.fullStatus.color">{{ feedback.fullStatus.title }}</p>
              <p class="suggestion-title">{{ feedback.title }}</p>
              <p class="suggestion-description">{{ feedback.description }}</p>
              <p class="suggestion-category">{{ feedback.finalCategory }}</p>
            </router-link>
            <section class="suggestion-upvotes-container">
              <section class="suggestion-upvotes">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7"><path d="m1.334 6 4-4 4 4" stroke="#4661E6" stroke-width="2"/></svg>
                <span>{{ feedback.upvotes }}</span>
              </section>
            </section>
            <section class="suggestion-comments">
              <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
              <span v-if="feedback.comments">{{ feedback.comments.length }}</span>
              <span v-else class="none">0</span>
            </section>
          </article>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      statuses: [
        {
          slug: 'planned',
          title: 'Planned',
          description: 'Ideas prioritized for research',
          color: 'orange'
        },
        {
          slug: 'in-progress',
          title: 'In-Progress',
          description: 'Currently being developed',
          color: 'pink'
        },
        {
          slug: 'live',
          title: 'Live',
          description: 'Released features',
          color: 'blue'
        }
      ],
      activeStatus: 'planned'
    }
  },
  computed: {
    ...mapState('app', ['productRequests'])
  },
  methods: {
    getFeedbacksByStatus(status) {
      return this.productRequests.filter(el => el.status === status).map(el => ({
          ...el,
          fullStatus: this.statuses.find(elStatus => elStatus.slug === status),
          finalCategory: el.category.length <= 2 ? el.category.toUpperCase() : el.category.charAt(0).toUpperCase() + el.category.slice(1)
        }))
    }
  }
}
</script>

<style lang="scss" scoped>
.roadmap-page {
  width: 100%;
  max-width: calc(1110px + 2 * 40px);
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 0;
  }

  .top-bar {
    width: 100%;
    background: #373F68;
    border-radius: 10px;
    padding: 27px 40px 27px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;

    @media (max-width: 1023px) {
      margin-bottom: 32px;
    }

    @media (max-width: 767px) {
      border-radius: 0;
      padding: 26px 24px;
      margin-bottom: 0;
    }

    .left-side {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .back-link {
        display: flex;
        align-items: center;
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        color: #FFF;
        margin-bottom: 4px;
        cursor: pointer;

        @media (max-width: 767px) {
          font-size: 13px;
          line-height: 19px;
          margin-bottom: 3px;
        }

        &:before {
          content: '';
          width: 6px;
          height: 8px;
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDEwIj48cGF0aCBkPSJtNC4zMzQgOS00LTQgNC00IiBzdHJva2U9IiNDREQyRUUiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==");
          margin-right: 16px;
        }
      }

      .bar-heading {
        font-family: Jost;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
        letter-spacing: -0.333333px;
        color: #FFFFFF;
        margin: 0;

        @media (max-width: 767px) {
          font-size: 18px;
          line-height: 26px;
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

  .roadmap-mobile-menu {
    display: none;

    @media (max-width: 767px) {
      width: 100%;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      border-bottom: 1px solid rgba(#8C92B3, .25);

      .mobile-menu-item {
        position: relative;
        width: calc(100% / 3);
        padding: 20px 0;
        display: flex;
        justify-content: center;
        cursor: pointer;

        &.is-active:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          right: 0;
          height: 4.5px;
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

        .item-title {
          font-family: Jost;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          line-height: 19px;
          text-align: center;
          letter-spacing: -0.180556px;
          color: #3A4374;
          mix-blend-mode: normal;
          opacity: 0.4;
          margin: 0;
        }
      }
    }
  }

  .roadmap {
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
      padding: 24px;
    }

    .roadmap-column {
      width: calc((100% - 60px) / 3);
      display: flex;
      flex-direction: column;

      @media (max-width: 1023px) {
        width: calc((100% - 20px) / 3);
      }

      @media (max-width: 767px) {
        display: none;
        width: 100%;

        &.is-active {
          display: flex;
        }
      }

      .column-header {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;

        @media (max-width: 1023px) {
          margin-bottom: 24px;
        }

        .header-title {
          font-family: Jost;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 26px;
          letter-spacing: -0.25px;
          color: #3A4374;
          margin: 0 0 4px;

          @media (max-width: 1023px) {
            font-size: 14px;
            line-height: 20px;
          }

          @media (max-width: 767px) {
            font-size: 18px;
            line-height: 26px;
          }
        }

        .header-description {
          font-family: Jost;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 23px;
          color: #647196;
          margin: 0;

          @media (max-width: 1023px) {
            font-size: 14px;
            line-height: 20px;
          }

          @media (max-width: 767px) {
            font-size: 13px;
            line-height: 19px;
          }
        }
      }

      .feedbacks-list {
        width: 100%;
        display: flex;
        flex-direction: column;

        .feedback-item {
          position: relative;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          border-radius: 5px;
          padding: 32px;
          margin-bottom: 24px;
          overflow: hidden;

          @media (max-width: 1023px) {
            padding: 20px 24px;
            margin-bottom: 16px;
          }

          &:last-child {
            margin-bottom: 0;
          }

          &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background-color: #eee;
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

          .feedback-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 16px;
            text-decoration: none;

            .feedback-status {
              position: relative;
              font-family: Jost;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 23px;
              color: #647196;
              margin: 0 0 8px;
              padding-left: 24px;

              @media (max-width: 1023px) {
                font-size: 13px;
                line-height: 19px;
                margin-bottom: 14px;
              }

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

              &.orange:before {
                background-color: #F49F85;
              }

              &.pink:before {
                background-color: #AD1FEA;
              }

              &.blue:before {
                background-color: #62BCFA;
              }
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

              @media (max-width: 1023px) {
                font-size: 13px;
                line-height: 19px;
                margin-bottom: 9px;
              }
            }

            .suggestion-description {
              font-family: Jost;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 23px;
              color: #647196;
              margin: 0 0 16px;

              @media (max-width: 1023px) {
                font-size: 13px;
                line-height: 19px;
                margin-bottom: 24px;
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

          .suggestion-upvotes {
            display: flex;
            align-items: center;
            background: #F2F4FE;
            border-radius: 10px;
            padding: 6px 12px 6px 16px;
            cursor: pointer;

            &:hover {
              background: #CFD7FF;
            }

            svg {
              height: 8px;
              margin-bottom: 0;
              margin-right: 10px;
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

          .suggestion-comments {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 40px;
            flex-shrink: 0;

            @media (max-width: 767px) {
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
}
</style>
