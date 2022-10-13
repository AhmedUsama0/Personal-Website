<template>
  <section class="about-section" id="about">
    <div class="about-header">About Me</div>
    <div class="container">
      <img src="@/assets/about2.png" class="about-img" alt="about-img" />
      <div class="box">
        <div class="box-content">
          <p>+02</p>
          <p>
            Years <br />
            Experience
          </p>
        </div>
        <div class="box-content">
          <p>+20</p>
          <p>
            Completed <br />
            Projects
          </p>
        </div>
        <a
          href="https://drive.google.com/uc?export=download&id=1n8UhLjt-6CP8rjYvYvhAbc2MBBpgf779"
          class="cv"
          download
          >Download CV</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
};
</script>

<style lang="scss">
.about-section {
  padding: 80px 0px;
  .about-header {
    text-align: center;
    margin-bottom: 80px;
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
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 20px;

    img {
      max-width: 500px;
      height: auto;
      border-radius: 20px;
    }
    .box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .box-content {
        flex-basis: 50%;
        text-align: center;
        p {
          &:first-child {
            font-size: 40px;
            color: var(--black-color);
          }
          &:last-child {
            font-size: 20px;
            color: var(--secondary-color);
          }
        }
      }
      .cv {
        background-color: var(--main-color);
        color: #fff;
        border-radius: 10px;
        display: block;
        font-size: 25px;
        padding: 15px 30px;
        width: fit-content;
        margin: 50px auto 0;
        &::after {
          content: "\f019";
          font-family: "Font Awesome 6 Free";
          font-weight: 900;
          margin-left: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .about-section {
    .container {
      flex-direction: column;
      .box {
        order: 2;
        .box-content {
          order: 2;
        }
        .cv {
          order: 3;
        }
      }
      img {
        order: 1;
        max-width: 350px !important;
      }
    }
  }
}
</style>
