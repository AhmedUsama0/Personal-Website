<template>
  <i class="fa-solid fa-arrow-up arrow-up" @click="scrollUp"></i>
</template>

<script>
export default {
  setup() {
    const scrollUp = () => window.scrollTo(0, 0);
    return { scrollUp };
  },
};
</script>

<style lang="scss">
.arrow-up {
  position: fixed;
  right: 2%;
  z-index: 50;
  bottom: 5%;
  background-color: var(--main-color);
  color: #fff;
  font-size: 20px;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  &:hover::after {
    background-color: rgb(255 255 255 / 10%);
  }
}
@media screen and (max-width: 991px) {
  .arrow-up {
    bottom: 10%;
  }
}
</style>
