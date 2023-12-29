<template>
  <header :class="{ fixed_top: isScrolled }">
    <a href="/" class="logo">Ahmed</a>
    <input type="checkbox" id="menu" />
    <nav>
      <ul>
        <li class="home">
          <a href="#" @click.prevent="scrollTo('home')">Home</a>
        </li>
        <li class="about">
          <a href="#" @click.prevent="scrollTo('about')">About</a>
        </li>
        <li class="skills">
          <a href="#" @click.prevent="scrollTo('skills')">Skills</a>
        </li>
        <li class="portfolio">
          <a href="#" @click.prevent="scrollTo('portfolio')">Portfolio</a>
        </li>
        <li class="contact">
          <a href="#" @click.prevent="scrollTo('contact')">ContactMe</a>
        </li>
        <i
          class="fa-solid fa-moon moon"
          @click="theme == 'light' ? (theme = 'dark') : (theme = 'light')"
        ></i>
      </ul>
    </nav>
    <label for="menu" class="menu">
      <i class="fa-solid fa-bars"></i>
    </label>
  </header>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "NavBar",
  setup(props, context) {
    const isScrolled = ref();
    const theme = ref("light");
    var root = document.documentElement;
    const scrollTo = (view) => context.emit("scroll", view);

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 270) {
        isScrolled.value = true;
        return;
      }
      isScrolled.value = false;
    });
    watch(theme, (currentTheme) => {
      if (currentTheme == "dark") {
        root.style.setProperty("--body-bgColor", "#191524");
        root.style.setProperty("--black-color", "#fff");
        root.style.setProperty("--input-color", "#fff");
      }
      if (currentTheme == "light") {
        root.style.setProperty("--body-bgColor", "#fff");
        root.style.setProperty("--black-color", "#000");
        root.style.setProperty("--input-color", "#eeeffc");
      }
    });
    return { scrollTo, isScrolled, theme };
  },
};
</script>
<style lang="scss">
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: var(--body-bgColor) !important;
  padding: 10px;
  top: -20px;
  transition: top var(--transition);
  input {
    display: none;
  }
  .logo {
    font-size: 30px;
    font-weight: bold;
    color: var(--black-color);
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px 50px;
    list-style-type: none;
    li {
      &::before {
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        margin-right: 10px;
        color: var(--black-color);
      }
      a {
        text-decoration: none;
        color: var(--black-color);
        font-size: 18px;
        font-weight: 900;
        position: relative;
        &:focus {
          color: var(--main-color);
        }
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          -webkit-transform: translateX(-50%);
          -moz-transform: translateX(-50%);
          -o-transform: translateX(-50%);
          -ms-transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: var(--main-color);
          transition: var(--transition);
          -webkit-transition: var(--transition);
          -moz-transition: var(--transition);
          -o-transition: var(--transition);
          -ms-transition: var(--transition);
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
    .home::before {
      content: "\f015";
    }
    .skills::before {
      content: "\f085";
    }
    .portfolio::before {
      content: "\f0b1";
    }
    .about::before {
      content: "\f2bb";
    }
    .contact::before {
      content: "\f095";
    }

    .moon {
      font-size: 35px;
      color: var(--black-color);
      cursor: pointer;
    }
  }
  .menu {
    font-size: 35px;
    color: var(--black-color);
    cursor: pointer;
    display: none !important;
  }
}
@media screen and (max-width: 991px) {
  header {
    position: fixed;
    width: 100%;
    z-index: 100;
    justify-content: space-between;
    top: unset !important;
    bottom: 0;
    box-shadow: 2px 1px 5px 5px rgb(0 0 0 / 20%);
    padding: 0;
    input {
      &:checked {
        & ~ nav {
          max-height: 169px;
        }
      }
      &:not(:checked) {
        & ~ nav {
          max-height: 0;
        }
      }
    }
    .logo {
      order: 2;
      margin-left: 10px;
    }
    nav {
      -webkit-transition: max-height 0.7s;
      -moz-transition: max-height 0.7s;
      -ms-transition: max-height 0.7s;
      -o-transition: max-height 0.7s;
      transition: max-height 0.7s;
      overflow: hidden;
      order: 1;
      flex: 100%;
      ul {
        justify-content: unset;
        flex-wrap: wrap;
        gap: 0;
        height: 100%;
        width: 100%;
        li {
          padding: 10px;
          flex-basis: 33%;
          overflow-x: unset;
        }
        .moon {
          flex-basis: 33%;
          padding: 10px;
        }
      }
    }
    .menu {
      display: block !important;
      order: 2;
      margin-right: 10px;
    }
  }
}

.fixed_top {
  position: fixed;
  z-index: 500;
  width: 100%;
  box-shadow: 2px 1px 5px 5px rgb(0 0 0 / 20%);
  padding: 0;
  top: 0;
}
</style>
