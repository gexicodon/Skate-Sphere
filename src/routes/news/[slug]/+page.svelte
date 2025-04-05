<script lang="ts">
    import { getPosts } from '$lib/scripts/firebase';
    import Navbar from '$lib/Navbar.svelte';
  import Footer from '$lib/Footer.svelte';
  import Post from '$lib/Post.svelte';
  export let data;
    let post: any = null;
    let loading = true;
    let error: any = null;
  

    async function fetchPost() {
  try {
    loading = true;
    const posts = await getPosts();
    console.log("getPosts returned:", posts);
    if (posts &&  data && data.slug) {
      post = posts.find(p => p.slug === data.slug);
      console.log("post found:", post);
      console.log("posts slugs:", posts.map(p => p.slug === data.slug));
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
  <Navbar />
  {#if loading}
    <p>Загрузка...</p>
  {:else if error}
    <p>Ошибка: {error.message}</p>
  {:else if post}
    <Post post={post} />
  {:else}
    <p>Пост не найден</p>
  {/if}
  
  <Footer />