<script lang='ts'>
  import Carousel from '$lib/Carousel.svelte';
  import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Newscard from '$lib/Newscard.svelte';
  import { getPosts } from '$lib/scripts/firebase';
  import { Post } from '$lib/models/post';
  import { onMount } from 'svelte';

  let posts: Post[] = [];
  let loading = true;
  let error: Error | null = null;

  onMount(async () => {
    try {
      loading = true;
      posts = await getPosts();
      loading = false;
    } catch (err: unknown) { 
      if (err instanceof Error) {
        error = err;
      } else {
        error = new Error(`Неизвестная ошибка: ${String(err)}`); 
      }
      loading = false;
    }
  });
</script>

<Navbar />
<Carousel />
{#if loading}
  <p>Загрузка...</p>
{:else if error}
  <p>Ошибка загрузки постов: {error.message}</p>
{:else}
  <div class="main">
    <div class="content">
      {#each posts as post}
        <Newscard {post} />
      {/each}
    </div>
  </div>
{/if}
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
