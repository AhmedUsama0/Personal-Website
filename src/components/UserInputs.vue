<template>
  <form action="" autocomplete="off">
    <div class="right-box">
      <input type="text" placeholder="Name" class="name" />
      <input type="email" placeholder="Email" class="email" />
      <input type="text" placeholder="Project" class="project" />
      <textarea
        cols="30"
        rows="5"
        placeholder="Message"
        class="message"
      ></textarea>
      <button type="submit" class="send">Send Message</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
form {
  flex-basis: 50%;
  .right-box {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 0px;
    .name,
    .email,
    .project,
    .message {
      padding: 10px 10px 30px;
      border-radius: 10px;
      border: 0;
      outline: 0;
      background-color: #eeeffc;
      flex-basis: 100%;
      font-size: 18px;
      &::placeholder {
        font-size: 18px;
      }
    }
    .send {
      background-color: var(--main-color);
      color: #fff;
      border-radius: 10px;
      border: 0;
      cursor: pointer;
      display: block;
      font-size: 20px;
      padding: 10px 25px;
      width: 200px;
      text-align: left;
      position: relative;
      &::after {
        content: "\f1d8";
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 10px;
      }
    }
    .message {
      resize: none;
    }
  }
}
</style>
