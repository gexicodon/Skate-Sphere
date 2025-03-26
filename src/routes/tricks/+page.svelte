<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Trick from '$lib/Trick.svelte';
  import { db } from '$lib/scripts/firebase';
  import { onValue, ref } from 'firebase/database';
  import { onMount } from 'svelte';
  import { getTricks } from '$lib/scripts/firebase';
  import { TrickContent } from "$lib/models/trick";
  let tricks: TrickContent[] = [];
  let loading = true;
  let error: Error | null = null;

  onMount(async () => {
    try {
      loading = true;
      tricks = await getTricks();
      loading = false;
    } catch (err: unknown) { // <--- ЗДЕСЬ ИЗМЕНЕНИЕ
      if (err instanceof Error) {
        error = err;
      } else {
        // Обработка случая, когда err не является Error
        error = new Error(`Неизвестная ошибка: ${String(err)}`); 
      }
      loading = false;
    }
  });
</script>

<Navbar />
<div class="banner">
  <div class="banner_content">
    <h1 class="title">Трюки</h1>
  </div>
</div>
<div class='main'>
  {#if loading}
  <p>Загрузка...</p>
{:else if error}
  <p>Ошибка загрузки постов: {error.message}</p>
{:else}
  <div class="main">
    <div class="content">
      {#each tricks as trick}
        <Trick {trick} />
      {/each}
    </div>
  </div>
{/if}
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
      max-width: 1180px;
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

  /* Медиазапросы для адаптации под разные устройства */
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