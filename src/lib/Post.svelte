<script>
  export let post;
  import Icon from './Icon.svelte';
</script>

<div class="post" style="background:linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%), url({post.cover}); background-size: cover; background-position: center;">
  <h2 class="title">{post.title}</h2>
  <p class="date">{post.created}</p>
</div>
<div class="content">
  <p>{post.content}</p>
  <div class="back-btn">
    <a href="/news">
      <Icon id="arrow-left" width="50" height="50" />
      <h2>Назад к новостям</h2>
    </a>
  </div>
</div>

<style lang="scss">
  .post {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 108px;
    gap: 40px;
    width: 100%;
    min-height: 600px;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    &:hover {
      transform: scale(1.02);
    }

    .title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 96px;
      color: white;
      margin: 0;
      z-index: 2;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }

    .date {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 24px;
      color: white;
      z-index: 2;
      text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 108px;
    background-color: #1E1E1E;
    color: white;

    p {
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
      font-size: 24px;
      line-height: 1.6;
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
    @media (max-width: 1200px) {
    .post {
      min-height: 70vh;
    }

    .content {
      padding: 4vw;
    }
  }

  @media (max-width: 992px) {
    .back-btn a {
      padding: 1rem 1.5rem;
      gap: 15px;
      max-width: 280px;
    }
  }

  @media (max-width: 768px) {
    .post {
      min-height: 60vh;
      padding: 4vw;
    }

    .content {
      padding: 4vw;

      p {
        line-height: 1.7;
      }
    }

    .back-btn {
      margin-top: 2rem;

      a {
        padding: 0.8rem 1.2rem;
        gap: 12px;
        max-width: 250px;
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 576px) {
    .post {
      min-height: 50vh;
      padding: 5vw 4vw;
    }

    .content {
      padding: 5vw 4vw;

      p {
        line-height: 1.6;
        text-align: left;
      }
    }

    .back-btn {
      margin-top: 1.5rem;

      a {
        width: 100%;
        max-width: none;
        justify-content: center;
        padding: 0.7rem 1rem;
        gap: 10px;
        font-size: 1rem;

        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  @media (max-width: 400px) {
    .back-btn a {
      font-size: 0.9rem;
      padding: 0.6rem 0.9rem;
    }
  }
</style>