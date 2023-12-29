<template>
  <div class="project" v-for="project in projects" :key="project.title">
    <img :src="require(`@/assets/${project.img}`)" />
    <div class="project-info">
      <div class="project-title">{{ project.title }}</div>
      <p class="project-description">
        {{ project.description }}
      </p>
      <a :href="project.link" class="view-btn" target="_blank">View Project</a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const projects = ref([
      {
        title: "Ask & Answer",
        description:
          "Web app to ask and answer questions and allow any user to talk to another user privately.",
        img: "ask-answer6.png",
        link: "http://ask-answer.kesug.com/",
      },
      {
        title: "Chat App",
        description:
          "Public chat app so all users talk to each other in one room.",
        img: "chatapp.png",
        link: "https://chat-app-six-livid.vercel.app/login",
      },
      {
        title: "Template",
        description: "Amazing website template with a lot of animations.",
        img: "template2.png",
        link: "https://wonder-full-website.vercel.app",
      },
      {
        title: "Game Website",
        description:
          "A website template for the famous game god of war. The website supports arabic and english language.",
        img: "game2.png",
        link: "https://god-of-war-nine.vercel.app",
      },
      {
        title: "Quiz App",
        description: "Quiz app provides some questions about programming.",
        img: "quiz2.png",
        link: "https://quiz-app-five-dun.vercel.app",
      },
      {
        title: "Tic Tac Toe",
        description: "A simple game to play tic tac toe offline.",
        img: "tictactoe.png",
        link: "https://tic-tac-toe-beta-six.vercel.app",
      },
      {
        title: "A Simple Game",
        description: "A bear run after carots while knifes hunting it.",
        img: "bear.png",
        link: "https://bear-game.vercel.app",
      },
      {
        title: "Template",
        description: "Amazing website template.",
        img: "template.png",
        link: "https://vue-template-neon.vercel.app",
      },
    ]);

    return { projects };
  },
};
</script>

<style lang="scss">
.project {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100%;
  img {
    max-width: 50%;
    height: auto;
  }
  .project-info {
    .project-title {
      font-size: 40px;
      color: var(--black-color);
    }
    .project-description {
      color: var(--secondary-color);
      font-size: 18px;
      max-width: 300px;
      word-wrap: break-word;
    }
  }
  .view-btn {
    background-color: var(--main-color);
    color: #fff;
    border-radius: 10px;
    display: block;
    font-size: 20px;
    padding: 10px 25px;
    width: fit-content;
    margin: 50px 0 0;

    &::after {
      content: "\f061";
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      margin-left: 10px;
      transition: var(--transition);
      -webkit-transition: var(--transition);
      -moz-transition: var(--transition);
      -o-transition: var(--transition);
      -ms-transition: var(--transition);
      left: 0;
      position: relative;
    }

    &:hover::after {
      left: 5px;
    }
  }
}

@media screen and (max-width: 991px) {
  .project {
    flex-direction: column;
    justify-content: unset;
  }
}

@media screen and (max-width: 500px) {
  .project {
    img {
      max-width: 100% !important;
    }
  }
}
</style>
