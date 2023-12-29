<template>
  <section class="contact-section" id="contact">
    <div class="contact-header">Contact Me</div>
    <p class="contact-info">Get In Touch</p>
    <div class="container">
      <MyInfo />
      <UserInputs />
    </div>
  </section>
</template>

<script>
import MyInfo from "@/components/MyInfo.vue";
import UserInputs from "@/components/UserInputs.vue";
export default {
  components: {
    MyInfo,
    UserInputs,
  },
};
</script>

<style lang="scss">
.contact-section {
  padding: 80px 0px;
  .contact-header {
    text-align: center;
    margin-top: 130px;
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
      width: 200px;
      background-color: var(--main-color);
    }
  }
  .contact-info {
    text-align: center;
    margin-bottom: 80px;
    color: var(--secondary-color);
    font-size: 20px;
  }
  .container {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px 0px;
  }
}
@media screen and (max-width: 550px) {
  .contact-section {
    .container {
      flex-direction: column;
      align-items: unset;
    }
  }
}
</style>
