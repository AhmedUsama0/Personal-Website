<template>
  <UpArrow @scroll="scrollToView" />
  <NavBar @scroll="scrollToView" />
  <MainSection @scroll="scrollToView" />
  <AboutSection />
  <SkillsSection />
  <PortfolioSection />
  <ContactSection />
</template>

<script>
import UpArrow from "@/components/UpArrow.vue";
import NavBar from "@/components/NavBar.vue";
import MainSection from "@/components/MainSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ContactSection from "@/components/ContactSection.vue";
export default {
  name: "MyView",
  components: {
    UpArrow,
    NavBar,
    MainSection,
    AboutSection,
    SkillsSection,
    PortfolioSection,
    ContactSection,
  },
  setup() {
    const scrollToView = (view) => {
      const showedView = document.querySelector(`#${view}`);
      showedView.scrollIntoView({ behavior: "smooth" });
    };

    return { scrollToView };
  },
};
</script>

<style></style>
