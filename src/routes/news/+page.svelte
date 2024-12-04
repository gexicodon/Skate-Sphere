<script>
  import Carousel from "$lib/Carousel.svelte";
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import Newscard from "$lib/Newscard.svelte";
</script>

<Navbar />
<Carousel />
<div class='main'>
<div class='content'>
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
  <Newscard title='example' description='example' imgSrc='/example.jpg' linkNews='/' />
</div>
</div>
<Footer />

<style lang="scss">


  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 35px 20px;
    padding-top: 35px;
    padding-bottom: 35px;

  }
</style>



