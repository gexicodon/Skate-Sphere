<script lang="ts">
  import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import Trick from '$lib/Trick.svelte';
  import { db } from '$lib/scripts/firebase';
  import { onValue, ref } from 'firebase/database';
  import { onMount } from 'svelte';

  let tricks = new Array();

  onMount(() => {
        onValue(ref(db, '/tricks'), s => {
            if(s.exists()){
                tricks = Object.values(s.val());
            }
        });
    });
</script>

<Navbar />
<div class="banner">
  <div class="banner_content">
    <h1 class="title">Трюки</h1>
  </div>
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
    background-size: 100% 100%;
    .title {
      font-family: 'Montserrat';
      font-weight: 800;
      font-size: 96px;
      color: white;
      text-align: center;
      width: 1180px;
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
</style>
