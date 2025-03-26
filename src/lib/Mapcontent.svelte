<script>
  import Icon from './Icon.svelte';
  export let point;
</script>

<div class="main">
  <div class="head">
    <h1>{point.title}</h1>
  </div>
  <div class="content">
    <img src={point.image} alt="Фото скейтпарка" />
    <div class="text">
      <p>{point.description}</p>
      <div class="back-btn">
        <a href="/maps">
          <Icon id="arrow-left" width="50" height="50" />
          <h2>Назад к карте</h2>
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 80px 250px;
    padding-bottom: 150px;
    gap: 40px;
    background-color: #f9f9f9;
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 48px;
      color: #1e1e1e;
      margin: 0;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 80px;
    width: 100%;

    img {
      width: 600px;
      height: 393px;
      border-radius: 20px;
      object-fit: cover;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 40px;
      max-width: 700px;

      p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 1.6;
        color: #1e1e1e;
        margin: 0;
      }
    }

    .back-btn {
      a {
        display: flex;
        align-items: center;
        gap: 20px;
        background-color: #870000;
        padding: 20px 30px;
        border-radius: 30px;
        text-decoration: none;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 24px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #a30000;
        }

        h2 {
          margin: 0;
        }
      }
    }
  }

  /* Медиазапросы */
  @media (max-width: 1200px) {
    .main {
      padding: 60px 150px;
    }

    .content {
      flex-direction: column;
      align-items: center;
      gap: 40px;

      img {
        width: 100%;
        height: auto;
      }

      .text {
        max-width: 100%;
        align-items: center;
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    .main {
      padding: 40px 20px;
    }

    .head h1 {
      font-size: 36px;
    }

    .content {
      gap: 30px;

      img {
        border-radius: 15px;
      }

      .text p {
        font-size: 20px;
      }

      .back-btn a {
        padding: 15px 20px;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 480px) {
    .head h1 {
      font-size: 28px;
    }

    .content {
      gap: 20px;

      .text p {
        font-size: 18px;
      }

      .back-btn a {
        padding: 10px 15px;
        font-size: 18px;

        Icon {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
</style>