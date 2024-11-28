<script>
  import Button from "$lib/Button.svelte";
  import Card from "$lib/Card.svelte";
import Navbar from "$lib/Navbar.svelte";

</script>

<Navbar />

<div class='banner_container'>
  <div class = 'banner_content animated fadeInUp'>
    <h1 class='title'>the best way to learn tricks</h1>
    <Button text='join right now'></Button>
  </div>
</div>

<div class = 'cards_group'>
  <Card imgSrc='src/img/card1.png' title='our mission' description='is make skateboarding easier and more accessible!
here is a map of skateparks with chats for each where you can arrange a ride'></Card>
<Card imgSrc = 'src/img/card2.png' title='you can' description ='find a suitable skatepark ,make friends , learn tricks , keep up to date with the news '></Card>
</div>

<style lang='scss'>

  .banner_container {
    width: 100%;
    height: 642px;
    background: #870000;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    background-image: url('src/img/banner_img.png');
    background-size: 100% 100%;
    .title {
      font-family: 'Syne';
      font-weight: 800;
      font-size: 96px;
      color: white;
      text-align: center;
      width: 1180px;
      letter-spacing: -0.06em;
      
      
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
    align-items:  center;
    padding: 90px;
    gap: 86px;
  }

  @keyframes fadeInUp {
    from {
        transform: translate3d(0,40px,0)
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1
    }
  }

  @keyframes showObject {
    from {
      display : none
    }
    to {
      display: flex;
    }
  }
  .animated {
    animation-duration: 2s;
    animation-fill-mode: both;
    -webkit-animation-duration: 2s;
    -webkit-animation-fill-mode: both
}
.fadeInUp {
    opacity: 0;
    animation-name: fadeInUp;
    -webkit-animation-name: fadeInUp;
}
</style>







