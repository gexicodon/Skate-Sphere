<script>
  import Button from "$lib/Button.svelte";
  import Card from "$lib/Card.svelte";
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import MainPageCard from "$lib/MainPageCard.svelte";
</script>

<Navbar />

<div class="banner_container">
  <div class="banner_content animated fadeInUp">
    <h1 class="title">Платформа для обучения трюкам на скейтборде</h1>
  </div>
</div>

<div class="cards_group">
  <MainPageCard />
  <Card
    imgSrc="/card1.png"
    title="Наша задача"
    description="Сделать скейтбординг проще и доступнее! Карта скейтпарков поможет найти комфортное место для катания!"
  ></Card>
  <Card
    imgSrc="/card2.png"
    title="Ты можешь"
    description="Найти подходящий скейтпарк, быть в курсе последних новостей о скейтбординге! "
  ></Card>
</div>
<Footer />

<style lang="scss">
  .banner_container {
    width: 100%;
    height: 642px;
    background: #870000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    background-image: url("/banner_img.png");
    background-size: 100% 100%;

    .title {
      font-family: "Montserrat";
      font-weight: 800;
      font-size: 96px;
      color: white;
      text-align: center;
      width: 1180px;
    }

    .banner_content {
      width: 100%;
      height: 642px;
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 51px;
      justify-content: center;
      align-items: center;
    }
  }

  .cards_group {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px;
    gap: 86px;
  }


  @media (max-width: 768px) {
    .banner_container {
      height: 400px; 
      background-size: cover;

      .title {
        font-size: 48px; 
        width: 80%; 
      }

      .banner_content {
        height: 400px; 
        gap: 20px; 
      }
    }

    .cards_group {
      padding: 30px;
      gap: 30px; 
    }
  }


  @media (max-width: 480px) {
    .banner_container {
      height: 300px; 

      .title {
        font-size: 36px; 
        width: 90%; 
      }

      .banner_content {
        height: 300px; 
        gap: 10px; 
      }
    }

    .cards_group {
      padding: 20px; 
      gap: 20px; 
    }
  }
</style>