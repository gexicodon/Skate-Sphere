<script>
export let imgSrc;
export let title;
export let description;
</script>

<div class='card'>
    <img src={imgSrc} alt='' />
    <div class='card_txt'>
    <h1>{title}</h1>
    <h2>{description}</h2>
    </div>
</div>

<style lang="scss">
    .card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 110px;
    width: 1076px;
    height: 429px;
    
    img {
        height: 429px;
        width: 429px;
        flex: none;
        order: 0;
        flex-grow: 0;
        }
    }
    .card_txt {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 86px;
        width: 537px;
        height: 351px;
    h1 {
        color: #1E1E1E;
        width: 537px;
        height: 42px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-size: 64px;
        line-height: 100px;
        display: flex;
        align-items: center;
        text-align: center;
        text-decoration: underline;
    }
    h2 {
        width: 527px;
        height: 223px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 50px;
        display: flex;
        text-align: left;
        align-items: center;
    }
    }
</style>



