<script>
  import Carousel from '$lib/Carousel.svelte';
  import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Newscard from '$lib/Newscard.svelte';
  import { db } from '$lib/scripts/firebase';
  import { onValue, ref } from 'firebase/database';
  import { onMount } from 'svelte';

  let posts = new Array();

  onMount(() => {
        onValue(ref(db, '/posts'), s => {
            if(s.exists()){
                posts = Object.values(s.val());
            }
        });
    });
</script>

<Navbar />
<Carousel />
<div class="main">
  <div class="content">
    {#each posts as post}
    <Newscard {post} />
    {/each}
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
