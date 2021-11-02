<template>
  <section class="home-page">
    <!-- Step One -->
    <section v-if="activeStep === 1" class="step-one">
      <div v-for="(option, index) in options" :key="index" class="option" @click="choose(option)">
        <GetIcon :icon="option" />
      </div>
    </section>
    <!-- Step Two -->
    <section v-if="activeStep === 2" class="step-two">
      <section class="choice player">
        <p class="choice-label">YOU PICKED</p>
        <div class="choice-option">
          <GetIcon :icon="playerChoice" />
        </div>
      </section>
      <section class="status" v-if="status">
        <p v-if="status === 'win'" class="status-label">You win</p>
        <p v-else class="status-label">You lose</p>
        <div class="status-button" @click="reset">Play again</div>
      </section>
      <section class="choice bot">
        <p class="choice-label">THE HOUSE PICKED</p>
        <div class="choice-option">
          <GetIcon v-if="botChoice" :icon="botChoice" />
          <div v-else class="choice-none"></div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import GetIcon from '@/components/GetIcon.vue'

export default {
  components: { GetIcon },
  data() {
    return {
      options: ['paper', 'scissors', 'rock'],
      activeStep: 1,
      playerChoice: null,
      botChoice: null,
      status: null
    }
  },
  methods: {
    choose(option) {
      this.playerChoice = option
      this.activeStep = 2

      setTimeout(() => {
        while (this.botChoice === null || this.botChoice === this.playerChoice) {
          this.botChoice = this.options[Math.floor(Math.random() * this.options.length)]
        }

        if (this.playerChoice === 'paper') {
          if (this.botChoice === 'scissors') {
            this.status = 'loose'
          } else {
            this.status = 'win'
          }
        } else if (this.playerChoice === 'scissors') {
          if (this.botChoice === 'rock') {
            this.status = 'loose'
          } else {
            this.status = 'win'
          }
        } else if (this.playerChoice === 'rock') {
          if (this.botChoice === 'paper') {
            this.status = 'loose'
          } else {
            this.status = 'win'
          }
        }

        if (this.status === 'win') {
          this.setScore()
        }
      }, 500)
    },
    reset() {
      this.status = null
      this.botChoice = null
      this.playerChoice = null
      this.activeStep = 1
    },
    ...mapMutations('app', ['setScore'])
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;

  .step-one {
    position: relative;
    width: 100%;
    max-width: 465px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    &:before {
      content: '';
      position: absolute;
      top: calc(25% - 12px);
      bottom: calc(25% - 12px);
      left: calc(25% - 40px);
      right: calc(25% - 40px);
      background-image: url("data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDYgMjc3Ij48cGF0aCBvcGFjaXR5PSIuMiIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkyLjUgNy41SDUuNTc0YzQuNjc5IDAgMTQ3Ljg5MiAyNTQgMTQ3Ljg5MiAyNTRMMjkyLjUgNy41WiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjE1Ii8+PC9zdmc+");
      background-size: contain;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .option {
      position: relative;
      display: flex;
      width: calc(50% - 40px);
      cursor: pointer;

      &:nth-child(2) {
        margin-left: 80px;
      }

      &:nth-child(3) {
        margin-top: 24px;
      }

      &:before {
        content: '';
        position: absolute;
        inset: -27px;
        border-radius: 50%;
        border: 24px solid rgba(#fff, .05);
        transform: translateY(-3px) scale(0.95);
        opacity: 0;
        transition: all ease-out .2s;
      }

      &:hover:before {
        opacity: 1;
      }

      svg {
        width: 100%;
      }
    }
  }

  .step-two {
    display: flex;
    align-items: stretch;
    justify-content: center;

    .choice {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 293px;
      margin: 0 36px;

      .choice-label {
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 3px;
        color: #FFFFFF;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
        margin: 0 0 60px;
      }

      .choice-option {
        flex: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .choice-none {
        width: 224px;
        height: 224px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
      }
    }

    .status {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 36px;

      .status-label {
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: bold;
        font-size: 56px;
        line-height: 67px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
        margin: 0 0 16px;
        text-transform: uppercase;
      }

      .status-button {
        width: 220px;
        background: linear-gradient(0deg, #F3F3F3 0%, #FFFFFF 100%);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
        border-radius: 8px;
        padding: 14px;
        text-align: center;
        font-family: Barlow Semi Condensed;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 2.5px;
        color: #3B4262;
        cursor: pointer;
        text-transform: uppercase;
      }
    }
  }
}
</style>
