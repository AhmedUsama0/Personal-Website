<template>
  <div class="field">
    <div class="field-container" @click="isClicked = !isClicked">
      <slot></slot>
      <div class="field-content">
        <div class="field-head">{{ title }}</div>
        <p v-if="exp">More than {{ exp }} years</p>
      </div>
      <i class="fa-solid fa-angle-up" :class="{ rotate: isClicked }"></i>
    </div>
    <div class="skills-container" :class="{ max_height: isClicked }">
      <div class="skill" v-for="skill in skills" :key="skill">
        <div class="skill-name">{{ skill.skillName }}</div>
        <div class="percentage">{{ skill.percentage }}%</div>
        <progress :value="skill.percentage" min="0" max="100"></progress>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SkillComponent",
  props: {
    skills: Array,
    title: String,
    exp: Number,
  },
  setup() {
    const isClicked = ref(false);
    return { isClicked };
  },
};
</script>

<style lang="scss">
.field {
  flex-basis: 45%;
  height: 600px;
  .field-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    i {
      pointer-events: none;
      font-size: 30px;
      color: var(--main-color);
      &:last-child {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -o-transform: rotate(180deg);
        transition: transform var(--transition);
        -webkit-transition: transform var(--transition);
        -moz-transition: transform var(--transition);
        -ms-transition: transform var(--transition);
        -o-transition: transform var(--transition);
      }
    }
    .field-content {
      pointer-events: none;
      flex-basis: 70%;
      .field-head {
        font-size: calc(19px + 0.3568vw);
        color: var(--black-color);
        font-weight: bold;
      }
      p {
        color: var(--secondary-color);
        font-size: 20px;
      }
    }
  }

  .skills-container {
    max-height: 0;
    padding: 15px;
    overflow: hidden;
    -webkit-transition: max-height var(--transition);
    -moz-transition: max-height var(--transition);
    -ms-transition: max-height var(--transition);
    -o-transition: max-height var(--transition);
    transition: max-height var(--transition);
    .skill {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 20px;
      .skill-name,
      .percentage {
        font-size: 20px;
      }
      .skill-name {
        color: var(--black-color);
      }
      .percentage {
        color: var(--seconday-color);
      }
      progress {
        background: var(--main-color);
        flex-basis: 100%;
      }
      progress::-moz-progress-bar {
        background: var(--main-color);
      }

      progress::-webkit-progress-value {
        background: var(--main-color);
      }
    }
  }
}
.rotate {
  transform: rotate(0deg) !important;
  -webkit-transform: rotate(0deg) !important;
  -moz-transform: rotate(0deg) !important;
  -o-transform: rotate(0deg) !important;
  -ms-transform: rotate(0deg) !important;
}
.max_height {
  max-height: 600px !important;
}

@media screen and (max-width: 784px) {
  .field {
    flex-basis: 100% !important;
    .field-container {
      gap: 0 20px;
    }
  }
}
</style>
