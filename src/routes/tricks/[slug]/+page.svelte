<script lang="ts">
    import { getTricks } from '$lib/scripts/firebase';
    import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte'; 
  import TrickContent from '$lib/TrickContent.svelte';
  export let data;
    let trick: any = null;
    let loading = true;
    let error: any = null;
  
    // Объявление функции вне блока $:, теперь это обычная функция
    async function fetchPost() {
  try {
    loading = true;
    const tricks = await getTricks();
    console.log("getPosts returned:", tricks);
    if (tricks &&  data && data.slug) {
      trick = tricks.find(p => p.slug === data.slug);
      console.log("posts slugs:", tricks.map(p => p.slug === data.slug));
    }
    loading = false;
  } catch (err) {
    console.error("Error in fetchPost:", err);
    error = err;
    loading = false;
  }
}


  
    // Вызов функции внутри реактивного блока $:
    $: fetchPost(); 
  </script>
  <Navbar />
  {#if loading}
    <p>Загрузка...</p>
  {:else if error}
    <p>Ошибка: {error.message}</p>
  {:else if trick}
    <TrickContent trick={trick} />
  {:else}
    <p>Пост не найден</p>
  {/if}
  
  <Footer />