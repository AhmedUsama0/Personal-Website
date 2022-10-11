<template>
  <main>
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
        <a href="#">Contact Me</a>
      </div>
      <img src="@/assets/main.jpg" class="header-img" />
    </div>
  </main>
</template>

<script>
export default {
  name: "MainSection",
};
</script>

<style lang="scss">
main {
  min-height: 70vh;
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
        color: #000;
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
