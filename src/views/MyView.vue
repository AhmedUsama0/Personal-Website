<template>
  <NavBar @scroll="scrollToView" />
  <MainSection />
  <AboutSection />
  <SkillsSection />
  <PortfolioSection />
  <ContactSection />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainSection from "@/components/MainSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import ContactSection from "@/components/ContactSection.vue";
export default {
  name: "MyView",
  components: {
    NavBar,
    MainSection,
    AboutSection,
    SkillsSection,
    PortfolioSection,
    ContactSection,
  },
  setup() {
    var showedView;
    const scrollToView = (view) => {
      if (view === "about") {
        showedView = document.querySelector("#about");
        showedView.scrollIntoView({ behavior: "smooth" });
      }
      if (view === "home") {
        showedView = document.querySelector("#home");
        showedView.scrollIntoView({ behavior: "smooth" });
      }
      if (view === "skills") {
        showedView = document.querySelector("#skills");
        showedView.scrollIntoView({ behavior: "smooth" });
      }
      if (view === "portfolio") {
        showedView = document.querySelector("#portfolio");
        showedView.scrollIntoView({ behavior: "smooth" });
      }
    };
    return { scrollToView };
  },
};
</script>

<style></style>
