<script>
  export let post; // Принимаем Post как свойство
</script>

<div class="card">
  <div class="img" style="background-image: url({post.cover}); background-size: cover;"></div> <!-- Изменено для лучшего отображения -->
  <div class="content">
    <h1 class="title">{post.title}</h1>
    <p class="description">{post.description}</p>
    <a href={`/news/${post.slug}`} class="more-button">Подробнее</a> <!-- Убрал <button> -->
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
        font-size: 20px;
        color: #ffffff;
      }
      p {
        width: 182px;
        height: 16px;

        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
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
      }
    }
  }

  @media (max-width: 768px) {
    .card {
      flex-direction: column;
      width: 90%;
      height: auto;
      padding: 20px;

      .img {
        width: 100%;
        height: 200px;
      }
      .content {
        width: 100%;
        height: auto;
        padding: 20px 0px;
        gap: 20px;

        h1, p {
          width: 100%;
          text-align: center;
        }
        .more-button {
          width: 100%;
          text-align: center;
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