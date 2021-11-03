<template>
  <section class="details-page">
    <section class="top-bar">
      <a class="back-link" @click.prevent="$router.go(-1)">Go Back</a>
      <router-link :to="`/edit/${feedback.id}`" class="bar-button">Edit Feedback</router-link>
    </section>
    <article class="suggestion-item">
      <section class="suggestion-upvotes-container">
        <section class="suggestion-upvotes">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 7"><path d="m1.334 6 4-4 4 4" stroke="#4661E6" stroke-width="2"/></svg>
          <span>{{ feedback.upvotes }}</span>
        </section>
      </section>
      <section class="suggestion-info">
        <p class="suggestion-title">{{ feedback.title }}</p>
        <p class="suggestion-description">{{ feedback.description }}</p>
        <p class="suggestion-category">{{ feedback.finalCategory }}</p>
      </section>
      <section class="suggestion-comments">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
        <span v-if="feedback.comments">{{ feedback.comments.length }}</span>
        <span v-else class="none">0</span>
      </section>
    </article>
    <section v-if="feedback.comments" class="feedback-comments">
      <p class="comments-title">{{ feedback.comments.length }} Comment{{ feedback.comments.length > 1 ? 's' : '' }}</p>
      <section v-for="comment in feedback.comments" :key="comment.id" class="comment-first" :class="{'has-replies': comment.replies}">
        <section class="comment-info">
          <section class="image-container">
            <img :src="comment.user.image" :alt="comment.user.name">
          </section>
          <section class="left-side">
            <p class="author-name">{{ comment.user.name }}</p>
            <p class="author-username">@{{ comment.user.username }}</p>
          </section>
          <section class="right-side">
            <p class="reply-link" @click="replyFormsShown.push(`comment-${comment.id}`)">Reply</p>
          </section>
        </section>
        <p class="comment-text">{{ comment.content }}</p>
        <section v-if="replyFormsShown.includes(`comment-${comment.id}`)" class="comment-reply-form">
          <textarea class="form-textarea" maxlength="225"></textarea>
          <button class="form-button" @click="replyComment(comment.id, null, `comment-${comment.id}`, $event)">Post Reply</button>
        </section>
        <section v-if="comment.replies" class="comments-replies">
          <section v-for="(reply, index) in comment.replies" :key="reply.id" class="comment-reply">
            <section class="comment-container">
              <section class="comment-info">
                <section class="image-container">
                  <img :src="reply.user.image" :alt="reply.user.name">
                </section>
                <section class="left-side">
                  <p class="author-name">{{ reply.user.name }}</p>
                  <p class="author-username">@{{ reply.user.username }}</p>
                </section>
                <section class="right-side">
                  <p class="reply-link" @click="replyFormsShown.push(`comment-${comment.id}-reply-${index}`)">Reply</p>
                </section>
              </section>
              <p class="comment-text"><span class="comment-replyingto">@{{ reply.replyingTo }}</span>{{ reply.content }}</p>
              <section v-if="replyFormsShown.includes(`comment-${comment.id}-reply-${index}`)" class="comment-reply-form">
                <textarea class="form-textarea" maxlength="225"></textarea>
                <button class="form-button" @click="replyComment(comment.id, reply.user.username, `comment-${comment.id}-reply-${index}`, $event)">Post Reply</button>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section class="add-comment-form">
      <p class="form-heading">Add Comment</p>
      <textarea v-model="newComment" class="form-textarea" maxlength="225"></textarea>
      <section class="bottom-line">
        <p class="remaining">{{ remaining }} character{{ remaining > 1 ? 's' : '' }} left</p>
        <button class="form-submit" @click.prevent="addComment">Post Comment</button>
      </section>
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      replyFormsShown: [],
      newComment: ''
    }
  },
  computed: {
    remaining() {
      return 225 - this.newComment.length
    },
    feedback() {
      return this.productRequests.filter(el => el.id === parseInt(this.$route.params.id, 10)).map(el => ({
          ...el,
          finalCategory: el.category.length <= 2 ? el.category.toUpperCase() : el.category.charAt(0).toUpperCase() + el.category.slice(1)
        }))[0]
    },
    ...mapState('app', ['currentUser', 'productRequests'])
  },
  methods: {
    replyComment(commentId, replyingTo, formSlug, event) {
      const $target = event.target
      const $textarea = $target.closest('section').querySelector('textarea')
      const message = $textarea.value

      const reply = {
        content: message,
        replyingTo: replyingTo || this.feedback.comments.find(el => el.id === commentId).user.username,
        user: this.currentUser
      }

      const objectToSend = {
        feedbackId: this.feedback.id,
        commentId,
        reply
      }

      this.replyToComment(objectToSend)

      this.replyFormsShown = this.replyFormsShown.filter(el => el !== formSlug)
    },
    addComment() {
      const comment = {
        id: parseInt(this.feedback.comments[this.feedback.comments.length - 1].id + 1, 10),
        content: this.newComment,
        user: this.currentUser
      }

      const objectToSend = {
        feedbackId: this.feedback.id,
        comment
      }

      this.addComment(objectToSend)
      this.newComment = ''
    },
    ...mapMutations('app', ['replyToComment', 'addComment'])
  }
}
</script>

<style lang="scss" scoped>
.details-page {
  width: 100%;
  max-width: calc(730px + 2 * 40px);
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    padding: 24px;
  }

  .top-bar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    .back-link {
      display: flex;
      align-items: center;
      font-family: Jost;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #647196;
      cursor: pointer;

      @media (max-width: 767px) {
        font-size: 13px;
        line-height: 19px;
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

    .bar-button {
      background-color: #4661E6;
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
        background-color: #7C91F9;
      }

      @media (max-width: 767px) {
        padding: 10px 16px;
        font-size: 13px;
        line-height: 19px;
      }
    }
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

  .feedback-comments {
    width: 100%;
    padding: 24px 32px;
    background: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;

    @media (max-width: 767px) {
      padding: 24px;
    }

    .comments-title {
      font-family: Jost;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.25px;
      color: #3A4374;
      margin: 0 0 28px;

      @media (max-width: 767px) {
        margin-bottom: 24px;
      }
    }

    .comment-first {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 32px;
      border-bottom: 1px solid rgba(#8C92B3, .25);
      margin-bottom: 32px;

      @media (max-width: 767px) {
        padding-bottom: 24px;
        margin-bottom: 24px;
      }

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
        margin-bottom: 0;

        &.has-replies {
          &:before {
            bottom: 0;
          }
        }
      }

      &.has-replies {
        &:before {
          content: '';
          position: absolute;
          left: 20px;
          top: 63px;
          bottom: 32px;
          width: 1px;
          background-color: rgba(#647196, .1);

          @media (max-width: 767px) {
            left: 0;
          }
        }
      }

      .comment-info {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        .image-container {
          width: 40px;
          height: 40px;
          margin-right: 32px;
          flex-shrink: 0;

          @media (max-width: 767px) {
            margin-right: 16px;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
            border-radius: 50%;
          }
        }

        .left-side {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .author-name {
            font-family: Jost;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: -0.194444px;
            color: #3A4374;
            margin: 0;

            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 19px;
            }
          }

          .author-username {
            font-family: Jost;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 20px;
            color: #647196;
            margin: 0;

            @media (max-width: 767px) {
              font-size: 13px;
              line-height: 19px;
            }
          }
        }

        .right-side {
          display: flex;
          flex-shrink: 0;

          .reply-link {
            font-family: Jost;
            font-style: normal;
            font-weight: 600;
            font-size: 13px;
            line-height: 19px;
            color: #4661E6;
            text-decoration: none;
            margin-left: 20px;
            cursor: pointer;

            &:hover {
              text-decoration-line: underline;
            }
          }
        }
      }

      .comment-text {
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #647196;
        margin: 0;
        padding-left: 72px;

        @media (max-width: 767px) {
          padding: 0;
          font-size: 13px;
          line-height: 19px;
        }

        span {
          font-family: Jost;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 22px;
          color: #AD1FEA;
          margin-right: 5px;
        }
      }

      .comment-reply-form {
        width: 100%;
        margin-top: 24px;
        padding-left: 72px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @media (max-width: 767px) {
          padding: 0;
          flex-direction: column;
        }

        .form-button {
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
          appearance: none;
          outline: none;
          border: 0;
          flex-shrink: 0;
          margin-left: 16px;
          cursor: pointer;

          &:hover {
            background-color: #C75AF6;
          }

          @media (max-width: 767px) {
            padding: 10px 16px;
            font-size: 13px;
            line-height: 19px;
            width: 100%;
            margin-left: 0;
            margin-top: 16px;
          }
        }

        .form-textarea {
          width: 100%;
          background-color: #F7F8FD;
          border-radius: 5px;
          font-family: Jost;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          line-height: 22px;
          color: #3A4374;
          border: none;
          appearance: none;
          outline-color: #4661E6;
          min-height: 96px;
          padding: 16px 24px;

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
      }

      .comments-replies {
        width: 100%;
        display: flex;
        flex-direction: column;

        .comment-reply {
          position: relative;
          margin-top: 32px;
          padding-left: 45px;

          @media (max-width: 767px) {
            margin-top: 24px;
            padding-left: 24px;
          }

          &:last-child {
            &:before {
              content: '';
              position: absolute;
              left: 10px;
              top: 20px;
              bottom: 0;
              width: 30px;
              background-color: #fff;

              @media (max-width: 767px) {
                left: 0;
                width: 5px;
              }
            }
          }
        }
      }
    }
  }

  .add-comment-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 24px 32px;

    .form-heading {
      font-family: Jost;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.25px;
      color: #3A4374;
      margin: 0 0 24px;
    }

    .form-textarea {
      width: 100%;
      background-color: #F7F8FD;
      border-radius: 5px;
      font-family: Jost;
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 22px;
      color: #3A4374;
      border: none;
      appearance: none;
      outline-color: #4661E6;
      min-height: 96px;
      padding: 16px 24px;
      margin-bottom: 16px;

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

    .bottom-line {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .remaining {
        font-family: Jost;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #647196;
        margin: 0;
      }

      .form-submit {
        background-color: #AD1FEA;
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
          padding: 10px;
        }

        &:hover {
          background-color: #C75AF6;
        }
      }
    }
  }
}
</style>
