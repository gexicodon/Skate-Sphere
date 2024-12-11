<script>
  import { Post } from "./models/post";
  export let post = new Post();
</script>

<div class="card">
  <div class="img" style="background: url({post.cover});"></div>
  <div class="content">
    <h1 class="title">{post.title}</h1>
    <p class="description">{post.description}</p>
    <button class="more-button">
      <a href={post.link}>Подробнее</a>
    </button>
  </div>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 26px;

    width: 558px;
    height: 253px;
    background: #373737;
    border-radius: 30px;

    .img {
      width: 253px;
      height: 253px;
      border-radius: 30px;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 24px 0px 0px;
      gap: 50px;

      width: 182px;
      height: 253px;

      h1 {
        width: 182px;
        height: 16px;

        font-family: 'Montserrat';
        font-weight: 800;
        font-size: 24px;
        color: #ffffff;
      }
      p {
        width: 182px;
        height: 16px;

        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 20px;
        color: #ffffff;
      }
      .more-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0px;
        gap: 10px;

        width: 182px;
        height: 52px;

        background: #870000;
        border-radius: 10px;
        a {
          color: #ffffff;
          align-items: center;
          text-align: center;
          font-family: 'Montserrat';
          font-weight: 800;
          font-size: 20px;
        }
      }
    }
  }
</style>
