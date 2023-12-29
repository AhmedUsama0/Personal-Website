<template>
  <section class="portfolio-section" id="portfolio">
    <div class="portfolio-header">Portfolio</div>
    <p class="portfolio-info">Most Recent Work</p>
    <div class="container">
      <i class="fa-solid fa-angle-right arrow right" @click="scrollToRight"></i>
      <i class="fa-solid fa-angle-left arrow left" @click="scrollToLeft"></i>
      <div class="project-container" ref="projectCont">
        <ProjectsComponent />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import { ref } from "vue";
export default {
  components: {
    ProjectsComponent,
  },
  setup() {
    var scroll = 0;
    const projectCont = ref();

    const scrollToRight = () => {
      if (
        scroll ==
        projectCont.value.offsetWidth *
          (projectCont.value.childElementCount - 1)
      )
        return;
      scroll += projectCont.value.offsetWidth;
      projectCont.value.scrollTo(scroll, 0);
    };

    const scrollToLeft = () => {
      if (scroll == 0) return;
      scroll -= projectCont.value.offsetWidth;
      projectCont.value.scrollTo(scroll, 0);
    };

    return { scrollToRight, scrollToLeft, projectCont };
  },
};
</script>

<style lang="scss">
.portfolio-section {
  padding: 80px 0px;
  .portfolio-header {
    text-align: center;
    font-size: 60px;
    color: var(--black-color);
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      height: 3px;
      width: 150px;
      background-color: var(--main-color);
    }
  }
  .portfolio-info {
    text-align: center;
    margin-bottom: 80px;
    color: var(--secondary-color);
    font-size: 20px;
  }
  .container {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    .arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      font-size: 60px;
      color: var(--main-color);
      cursor: pointer;
    }
    .right {
      right: 0;
    }
    .left {
      left: 0;
    }

    .project-container {
      display: flex;
      width: 800px;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 500px) {
  .portfolio-section {
    .project-container {
      width: 300px !important;
    }
  }
}
@media screen and (min-width: 501px) and (max-width: 767px) {
  .portfolio-section {
    .project-container {
      width: 500px !important;
    }
  }
}
</style>
