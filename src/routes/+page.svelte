<script>
  import Navbar from "$lib/Navbar.svelte";

</script>
<Navbar />

<div class='banner'>
  <h2>The best way to learn tricks</h2>
</div>

<style lang='scss'>
  .banner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
    h2 {
      font-family: 'Syne';
      font-weight: 800;
      position: absolute;
      padding-left: 370px;
      padding-right: 370px;
    }
  }
</style>


