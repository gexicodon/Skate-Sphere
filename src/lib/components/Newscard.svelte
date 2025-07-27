<script>
  export let post; 
</script>

<div class="card">
  <div class="img" style="background-image: url({post.cover}); background-size: cover;"></div>
  <div class="content">
    <h1 class="title">{post.title}</h1>
    <p class="description">{post.description}</p>
    <a href={`/news/${post.slug}`} class="more-button">Подробнее</a>
  </div>
</div>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 30px;
    width: 558px;
    height: 253px;
    background: #373737;
    border-radius: 30px;
    overflow: hidden; 

    .img {
      min-width: 253px;
      height: 100%;
      border-radius: 30px 0 0 30px;
      background-position: center;
      background-repeat: no-repeat;
    }

    .content {
      display: flex;
      flex-direction: column;
      padding: 24px 20px;
      gap: 20px;
      height: 100%;
      box-sizing: border-box;
      flex-grow: 1;

      h1 {
        margin: 0;
        font-family: 'Montserrat';
        font-weight: 800;
        font-size: 20px;
        color: #ffffff;
        line-height: 1.2;
        word-wrap: break-word;
      }

      p {
        margin: 0;
        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        line-height: 1.4;
        word-wrap: break-word;
        flex-grow: 1;
      }

      .more-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #870000;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        font-family: 'Montserrat';
        font-weight: 800;
        align-self: flex-start;
        margin-top: auto;
      }
    }
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      width: 90%;
      height: auto;
      padding: 0;

      .img {
        width: 100%;
        height: 200px;
        border-radius: 30px 30px 0 0;
      }

      .content {
        width: 100%;
        padding: 20px;
        gap: 15px;

        h1, p {
          text-align: center;
          width: 100%;
        }

        .more-button {
          align-self: center;
          margin-top: 10px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .card {
      .img {
        height: 150px;
      }

      .content {
        h1 {
          font-size: 18px;
        }

        p {
          font-size: 14px;
        }

        .more-button {
          padding: 8px 16px;
          font-size: 14px;
        }
      }
    }
  }
</style>