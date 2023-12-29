<template>
  <section class="skills-section" id="skills">
    <div class="skill-header">Skills</div>
    <p class="skill-info">My technical level</p>
    <div class="container">
      <SkillComponent
        :skills="frontEndSkills"
        title="Frontend Developer"
        :exp="3"
      >
        <i class="fa-sharp fa-solid fa-code"></i>
      </SkillComponent>
      <SkillComponent
        :skills="backEndSkills"
        title="Backend Developer"
        :exp="2"
      >
        <i class="fa-solid fa-database"></i>
      </SkillComponent>
    </div>
  </section>
</template>

<script>
import SkillComponent from "@/components/SkillComponent.vue";
import { ref } from "vue";
export default {
  name: "SkillsSection",
  components: { SkillComponent },
  setup() {
    const frontEndSkills = ref([
      { skillName: "HTML", percentage: "90" },
      { skillName: "CSS", percentage: "80" },
      { skillName: "JavaScript", percentage: "80" },
      { skillName: "Vue", percentage: "80" },
      { skillName: "BootStrap", percentage: "80" },
      { skillName: "JQuery", percentage: "70" },
    ]);

    const backEndSkills = ref([
      { skillName: "PHP", percentage: "90" },
      { skillName: "MYSQL", percentage: "90" },
      { skillName: "Laravel", percentage: "60" },
      { skillName: "Firebase", percentage: "60" },
      { skillName: "Node Js", percentage: "60" },
      { skillName: "MongoDB", percentage: "60" },
    ]);

    return { frontEndSkills, backEndSkills };
  },
};
</script>

<style lang="scss">
.skills-section {
  padding: 80px 0px;
  .skill-header {
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
      width: 100px;
      background-color: var(--main-color);
    }
  }
  .skill-info {
    text-align: center;
    margin-bottom: 80px;
    color: var(--secondary-color);
    font-size: 20px;
  }
  .container {
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

@media screen and (max-width: 784px) {
  .skills-section {
    .container {
      flex-direction: column;
      align-items: unset;
      gap: 50px 0px;
      padding: 0 10px;
    }
  }
}
</style>
