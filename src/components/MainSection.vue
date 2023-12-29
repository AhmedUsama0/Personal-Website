<template>
  <main id="home">
    <i class="fa-solid fa-arrow-down down-arrow" @click="scrollTo('about')"></i>
    <div class="container">
      <div class="links">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmed-usama-703515158/"
              class="fa-brands fa-linkedin-in"
              target="_blank"
            ></a>
          </li>
          <li>
            <a
              href="https://github.com/AhmedUsama0"
              class="fa-brands fa-github"
              target="_blank"
            ></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ahmed.osama.3576/"
              class="fa-brands fa-facebook"
              target="_blank"
            ></a>
          </li>
        </ul>
      </div>
      <div class="header-text">
        <h1>Hi, I'am Ahmed</h1>
        <div class="job">Full Stack Web Developer</div>
        <p>
          High level experience in Front-end development, <br />
          back-end development and producing <br />
          quality work.
        </p>
        <a href="mailto:aomn040@gmail.com">Contact Me</a>
      </div>
      <img src="@/assets/main2.png" class="header-img" />
    </div>
  </main>
</template>

<script>
export default {
  name: "MainSection",
  setup(props, context) {
    const scrollTo = (view) => context.emit("scroll", view);

    return { scrollTo };
  },
};
</script>

<style lang="scss">
main {
  min-height: 760px;
  position: relative;
  .down-arrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    color: var(--main-color);
    font-size: 40px;
    cursor: pointer;
    animation: up_down 1s linear infinite;
  }
  .container {
    padding: 30px 20px;
    max-width: 1350px;
    margin: 10vh auto 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    .links {
      ul {
        li {
          margin: 20px 0px;
          a {
            color: var(--main-color);
            font-size: 25px;
          }
        }
      }
    }
    .header-text {
      h1 {
        font-size: 60px;
        color: var(--black-color);
      }
      .job {
        color: var(--secondary-color);
        font-weight: bold;
        font-size: 25px;
      }
      p {
        color: var(--secondary-color);
        font-size: 20px;
      }
      a {
        background-color: var(--main-color);
        color: #fff;
        border-radius: 10px;
        display: block;
        font-size: 25px;
        padding: 15px 30px;
        width: fit-content;
        margin: 50px 0 0;
      }
    }

    .header-img {
      max-width: 100%;
      height: auto;
    }
  }
}
@keyframes up_down {
  0% {
    bottom: 50px;
  }
  50% {
    bottom: 30px;
  }
  100% {
    bottom: 50px;
  }
}
@media screen and (min-width: 992px) and (max-width: 1199px) {
  main {
    .header-img {
      max-width: 450px !important;
    }
  }
}

@media screen and (max-width: 991px) {
  main {
    .container {
      justify-content: unset !important;
      margin-top: 0 !important;
      .header-text {
        order: 3;
        flex-basis: 100% !important;
        margin-top: 10px;
        h1 {
          font-size: 40px !important;
        }
        .job {
          font-size: 20px !important;
        }
        p {
          font-size: 18px !important;
        }
        a {
          margin: 30px 0px !important;
        }
      }
      .links {
        flex-basis: 10% !important;
      }
      .header-img {
        order: 2;
        max-width: 90% !important;
      }
    }
  }
}
@media screen and (min-width: 500px) and (max-width: 991px) {
  main {
    .container {
      padding-left: 100px !important;
      padding-right: 100px !important;
    }
  }
}
</style>
