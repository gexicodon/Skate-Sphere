<script>
  import Card from "$lib/components/Card.svelte";
  import MainPageCard from "$lib/components/MainPageCard.svelte";
</script>



<div class="relative w-full bg-[#870000] bg-[url('/banner_img.png')] bg-cover flex flex-col items-start gap-[10px] h-[300px] lg:h-[642px]">
  <div class="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-[51px]">
    <h1 class="font-montserrat font-extrabold text-white text-center text-[40px] lg:text-[96px] w-full lg:w-[1180px] px-4">
      Платформа для обучения трюкам на скейтборде
    </h1>
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


<style lang="scss">

  .cards_group {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 90px;
    gap: 86px;
  }


 




</style>