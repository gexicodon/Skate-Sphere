<script>
  import Navbar from "$lib/Navbar.svelte";
  import { Map, TileLayer, Marker, Popup } from 'sveaflet';
</script>

<Navbar />
<div class="banner_container">
  <div class="banner_content animated fadeInUp">
    <h1 class="title">Скейтпарки Москвы</h1>
  </div>
  <div class='maps'>
    <Map
		options={{
			center: [51.505, -0.09],
			zoom: 13
		}}
	>
		<TileLayer url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'} />
		<Marker latLng={[51.505, -0.09]} />
	</Map>
  </div>
</div>

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
    background-image: url("/maps.png");
    background-size: 100% 100%;
    .title {
      font-family: "Montserrat";
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
