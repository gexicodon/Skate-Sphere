<script>
  import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import { Map, TileLayer, Marker, Popup } from 'sveaflet';
  import { Point } from '$lib/models/point';
  import { db } from '$lib/scripts/firebase';
  import { onValue, ref } from 'firebase/database';
  import { onMount } from 'svelte';

  let points = new Array();

  onMount(() => {
        onValue(ref(db, '/points'), s => {
            if(s.exists()){
                points = Object.values(s.val());
            }
        });
    });
</script>

<Navbar />
<div class="banner_container">
  <div class="banner_content animated fadeInUp">
    <h1 class="title">Скейтпарки Москвы</h1>
  </div>
</div>

<div class="maps">
  <Map
    options={{
      center: [55.755149071823766, 37.61708504822973],
      zoom: 12,
    }}
  >
  <TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
  {#each points as point}
    {#if point.latitude && point.longitude}
    <Marker latLng={[point.latitude, point.longitude]} />
    {/if}
    {/each}
  </Map>
</div>

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
  .maps {
    width: 100%;
    height: 1000px;
  }
</style>
