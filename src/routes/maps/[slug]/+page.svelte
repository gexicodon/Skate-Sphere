<script lang="ts">
    import { getPoints } from '$lib/scripts/firebase';
    import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import Mapcontent from '$lib/Mapcontent.svelte';
  export let data;
    let point: any = null;
    let loading = true;
    let error: any = null;
  

    async function fetchPoint() {
  try {
    loading = true;
    const points = await getPoints();
    console.log("getPoints returned:", points);
    if (points &&  data && data.slug) {
      point = points.find(p => p.slug === data.slug);
      console.log("point found:", point);
      console.log("point slugs:", points.map(p => p.slug === data.slug));
    }
    loading = false;
  } catch (err) {
    console.error("Error in fetchPost:", err);
    error = err;
    loading = false;
  }
}


  

    $: fetchPoint(); 
  </script>
  <Navbar />
  <div class="banner_container">
    <div class="banner_content animated fadeInUp">
      <h1 class="title">Скейтпарки Москвы</h1>
    </div>
  </div>
  {#if loading}
    <p>Загрузка...</p>
  {:else if error}
    <p>Ошибка: {error.message}</p>
  {:else if point}
    <Mapcontent point={point} />
  {:else}
    <p>Пост не найден</p>
  {/if}
  
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
      background-image: url('/maps.png');
      background-size: cover;
      background-position: center;
  
      .title {
        font-family: 'Montserrat';
        font-weight: 800;
        font-size: 96px;
        color: white;
        text-align: center;
        width: 100%;
        margin: 0;
      }
  
      .banner_content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
      }
    }
  
    @media (max-width: 1200px) {
      .banner_container {
        height: 500px;
  
        .title {
          font-size: 72px;
        }
      }
    }
  
    @media (max-width: 768px) {
      .banner_container {
        height: 400px;
  
        .title {
          font-size: 48px;
        }
      }
    }
  
    @media (max-width: 480px) {
      .banner_container {
        height: 300px;
  
        .title {
          font-size: 36px;
        }
      }
    }
  </style>