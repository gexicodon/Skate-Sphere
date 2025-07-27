<script lang="ts">
    import { getPosts } from '$lib/scripts/firebase';
  import Post from '$lib/components/Post.svelte';
  export let data;
    let post: any = null;
    let loading = true;
    let error: any = null;
  

    async function fetchPost() {
  try {
    loading = true;
    const posts = await getPosts();
    if (posts &&  data && data.slug) {
      post = posts.find(p => p.slug === data.slug);
    }
    loading = false;
  } catch (err) {
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
  {:else if post}
    <Post post={post} />
  {:else}
    <p>Пост не найден</p>
  {/if}
  
