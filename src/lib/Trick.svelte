<script>
  import { Trick } from "./models/trick";
  export let trick = new Trick();

</script>

<div class="card">
  <div class="content">
    <h1>{trick.trickTitle}</h1>
    <p>{trick.trickDescription}</p>
    <button>
      <a href={trick.trickLink}>Подробнее</a>
    </button>
  </div>
</div>

<style lang="scss">
  .card {
    height: 126px;
    margin: 416px;
    button {
      /* Auto layout */
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 10px;
      background: #870000;
      border-radius: 10px;
      height: 52px;
      width: 307px;
     a {
        color: white;
        font-family: 'Montserrat';
        font-weight: 800;
        font-size: 20px;
      }
    }
  }
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 50px 67px;
    gap: 87px;
    height: 126px;
    background: #373737;
    border-radius: 30px;
  }
  h1 {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;


    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    color: #FFFFFF;
  }
  p {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    align-items: center;


    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
  }
</style>

