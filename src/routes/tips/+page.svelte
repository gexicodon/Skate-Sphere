<script>
  import Footer from "$lib/Footer.svelte";
import Navbar from "$lib/Navbar.svelte";
  import Tip from "$lib/Tip.svelte";


</script>

<Navbar />
<div>
    <div class="banner">
        <div class="banner_content">
          <h1 class="title">Советы для начинающих скейтеров</h1>
        </div>
      </div>
    <div class='tips_group'>
        <Tip title="Как выбрать стойку на скейте?"
    description="Встань к другу спиной и попроси его чуть-чуть тебя толкнуть. Первая нога, которой ты наступил на землю - стоит на доске спереди." />
    <Tip title="Как толкаться и держать баланс?"
    description="Передняя нога — над передними болтами. Задняя нога — на тейле, готова отталкиваться. Перенеси вес на переднюю ногу, слегка согни колени. Оттолкнись задней ногой .После толчка быстро поставь заднюю ногу на деку над задними болтами. Держи корпус над доской, не отклоняйся назад." />
    <Tip title="Сколько времени нужно, чтобы научиться ollie?"
    description="У каждого это индивидуально. Главное верить в себя и искренне любить кататься на скейте, и всё получится." />
    <Tip title="Как не бояться пробовать трюки?"
    description="Главное - не торопиться. Начинай с малого, привыкай к падениям (первое время рекомендуем надевать защиту)." />
    <Tip title="Можно ли учиться на асфальте во дворе?"
    description="Учиться кататься на скейте можно везде, где тебе будет это комфортно. Если ты живёшь в Москве, ты можешь воспользоваться нашей картой скейтпарков." />
    </div>
</div>
<Footer />
<style lang="scss">
  .banner {
    width: 100%;
    height: 642px;
    background: #870000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    background-image: url('/banner_img2.png');
    background-size: cover;
    background-position: center;

    .title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 96px;
      color: white;
      text-align: center;
      width: 100%;
      max-width: 1500px;
      margin: 0;
    }

    .banner_content {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 51px;
      justify-content: center;
      align-items: center;
    }
  }
  .tips_group {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px;
    gap: 86px;
  }
  @media (max-width: 1200px) {
    .banner {
      height: 500px;

      .title {
        font-size: 72px;
      }
    }
  }

  @media (max-width: 768px) {
    .banner {
      height: 400px;

      .title {
        font-size: 48px;
      }
    }
  }

  @media (max-width: 480px) {
    .banner {
      height: 300px;

      .title {
        font-size: 36px;
      }
    }
  }

  @media (max-width: 360px) {
    .banner {
      height: 250px;

      .title {
        font-size: 28px;
      }
    }
  }

</style>