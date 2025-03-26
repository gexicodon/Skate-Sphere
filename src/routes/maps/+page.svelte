<script>
  import Footer from '$lib/Footer.svelte';
  import Navbar from '$lib/Navbar.svelte';
  import { Map, TileLayer, Marker, Popup } from 'sveaflet';
  import { db } from '$lib/scripts/firebase';
  import { onValue, ref } from 'firebase/database';
  import { onMount } from 'svelte';
  import Mapcontent from '$lib/Mapcontent.svelte';
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
    <Marker latLng={[point.latitude, point.longitude]}> 
      <Popup>
        <a href={`/maps/${point.slug}`}>Открыть</a>
      </Popup>
    </Marker>
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

  .maps {
    width: 100%;
    height: 1000px;

    @media (max-width: 1200px) {
      height: 800px;
    }

    @media (max-width: 768px) {
      height: 600px;
    }

    @media (max-width: 480px) {
      height: 400px;
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