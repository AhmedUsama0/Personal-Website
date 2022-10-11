<template>
  <header id="header">
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
        <i class="fa-solid fa-moon moon"></i>
      </ul>
    </nav>
    <label for="menu" class="menu">
      <i class="fa-solid fa-bars"></i>
    </label>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  setup(props, context) {
    const scrollTo = (view) => context.emit("scroll", view);

    return { scrollTo };
  },
};
</script>
<style lang="scss">
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  input {
    display: none;
  }
  .logo {
    font-size: 30px;
    font-weight: bold;
    color: #000;
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
      }
      a {
        text-decoration: none;
        color: #000;
        font-size: 18px;
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
      cursor: pointer;
    }
  }
  .menu {
    font-size: 35px;
    color: #fff;
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
    top: unset;
    bottom: 0;
    background-color: #fff;
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
      color: #000;
    }
  }
}
</style>
