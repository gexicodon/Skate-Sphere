<script>
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';

  let currentIndex = 0;
  const slides = [
    {
      image: '/carousel_img1.png',
      title: 'Grand Skate Tour 2024',
      description: 'Крупнейшее скейт-мероприятие в России',
    },
    {
      image: '/carousel_img2.png',
      title: 'SLS 2024',
      description: 'Самый крупный международный турнир по скейтбордингу',
    },
    {
      image: '/carousel_img3.png',
      title: 'Крытые скейтпарки Москвы',
      description: 'Где можно покататься зимой в 2024-2025 году',
    },
  ];

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
  }

  setInterval(nextSlide, 5000);
</script>

<div class="carousel">
  <div class="slides" style="transform: translateX(-{currentIndex * 100}%);">
    {#each slides as slide}
      <div class="slide" style="background-image:url({slide.image});">
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <Button link="/" text="Подробнее" />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .carousel {
    background: #870000;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 642px; /* Высота карусели по умолчанию */
    margin: auto;

    .slides {
      display: flex;
      transition: transform 0.5s ease-in-out;
      height: 100%; /* Слайды занимают всю высоту карусели */
    }

    .slide {
      min-width: 100%;
      height: 100%; /* Слайд занимает всю высоту карусели */
      background-size: cover; /* Изображение масштабируется, чтобы заполнить слайд */
      background-position: center; /* Центрирование изображения */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      gap: 20px;
      text-align: center;

      h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 96px;
        line-height: 100px;
        color: #ffffff;
        margin: 0;
      }

      p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 36px;
        color: #ffffff;
        margin: 0;
      }
    }
  }

  /* Медиазапросы для адаптации под разные устройства */
  @media (max-width: 1200px) {
    .carousel {
      height: 500px;

      .slide {
        h2 {
          font-size: 72px;
          line-height: 80px;
        }

        p {
          font-size: 28px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .carousel {
      height: 400px;

      .slide {
        h2 {
          font-size: 48px;
          line-height: 60px;
        }

        p {
          font-size: 24px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .carousel {
      height: 300px;

      .slide {
        h2 {
          font-size: 36px;
          line-height: 40px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: 360px) {
    .carousel {
      height: 250px;

      .slide {
        h2 {
          font-size: 28px;
          line-height: 32px;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
</style>