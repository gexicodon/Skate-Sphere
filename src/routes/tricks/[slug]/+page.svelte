<script lang="ts">
    import { getTricks } from '$lib/scripts/firebase';
  import TrickContent from '$lib/components/TrickContent.svelte';
  export let data;
    let trick: any = null;
    let loading = true;
    let error: any = null;
  

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


  

    $: fetchPost(); 
  </script>

  {#if loading}
    <p>Загрузка...</p>
  {:else if error}
    <p>Ошибка: {error.message}</p>
  {:else if trick}
    <TrickContent trick={trick} />
  {:else}
    <p>Пост не найден</p>
  {/if}
  