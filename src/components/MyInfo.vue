<template>
  <div class="left-box">
    <div class="sub-box">
      <div>Call Me</div>
      <div>+201094615778</div>
    </div>
    <div class="sub-box">
      <div>Email</div>
      <div>aomn040@gmail.com</div>
    </div>
    <div class="sub-box">
      <div>Location</div>
      <div>Mansoura, Dakahlia, Egypt</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.left-box {
  height: 521px;
  display: flex;
  flex-direction: column;
  gap: 20px 0px;
  flex-basis: 50%;
  .sub-box {
    position: relative;
    padding: 0px 55px 0px;
    div:first-child {
      color: var(--black-color);
      font-size: 30px;
    }
    div:last-child {
      color: var(--secondary-color);
      font-size: 18px;
      word-wrap: break-word;
    }
    &::before {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      position: absolute;
      font-size: 30px;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      color: var(--main-color);
    }
    &:first-child::before {
      content: "\f095";
    }
    &:nth-child(2)::before {
      content: "\f0e0";
    }
    &:last-child::before {
      content: "\f3c5";
    }
  }
}
</style>
