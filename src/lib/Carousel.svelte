<script>
  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";

let currentIndex = 0
const slides = [
    {
        image: '/carousel_img1.png',
        title: 'Grand Skate Tour 2024',
        description: 'Крупнейшее скейт-мероприятие в России',
    },
    {
        image: '/carousel_img2.png',
        title: 'SLS 2024',
        description: 'Самый крупный международный турнир по скейтбордингу'
    },
    {
        image: '/carousel_img3.png',
        title: 'Крытые скейтпарки Москвы',
        description: 'Где можно покататься зимой в 2024 году'
    }
];

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }
</script>

<div class='carousel'>
    <div class='slides' style='transform: translateX(-{currentIndex * 100}%);'>
        {#each slides as slide}
            <div class='slide' style='background-image:url({slide.image});'>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Button link='/' text='Подробнее' />
            </div>
        {/each}
    </div>
    <div class='scroll'>
        <button class="nav-button prev" on:click={prevSlide}>
            <Icon id='scroll_left' width='60' height='60' />
        </button>
        <button class="nav-button next" on:click={nextSlide}>
            <Icon id='scroll_right' width='60' height='60' />
        </button>

    </div>
</div>

<style lang="scss">
    .carousel {
        background: #870000;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 642px;
        margin: auto;
        .slides {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
        .slide {
            min-width: 100%;
            height: 642px;
            background-size: cover;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 103px;
            gap: 65px;
            h2 {
                text-align: center;
                font-family: "Montserrat";
                font-style: normal;
                font-weight: 800;
                font-size: 96px;
                line-height: 100px;
                color: #FFFFFF;
            }
            p {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                color: #FFFFFF;
            }
        }
    .scroll {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            padding: 0px 34px;
            justify-content: space-between;

            position: absolute;
            width: 100%;
            height: 60px;
            left: 0;
            top: 290px;
    }
        
    }
</style>



