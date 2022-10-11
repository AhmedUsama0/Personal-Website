<template>
  <NavBar @scroll="scrollToView" />
  <MainSection ref="home" />
  <AboutSection ref="about" />
  <SkillsSection ref="skills" />
  <PortfolioSection ref="portfolio" />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainSection from "@/components/MainSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import { ref } from "vue";
export default {
  name: "MyView",
  components: {
    NavBar,
    MainSection,
    AboutSection,
    SkillsSection,
    PortfolioSection,
  },
  setup() {
    const about = ref();
    const home = ref();
    const skills = ref();
    const portfolio = ref();
    const scrollToView = (view) => {
      if (view === "about")
        about.value.$el.scrollIntoView({ behavior: "smooth" });
      else if (view === "home")
        home.value.$el.scrollIntoView({ behavior: "smooth" });
      else if (view === "skills")
        skills.value.$el.scrollIntoView({ behavior: "smooth" });
      else if (view === "portfolio")
        portfolio.value.$el.scrollIntoView({ behavior: "smooth" });
    };
    return { scrollToView, home, about, skills, portfolio };
  },
};
</script>

<style></style>
