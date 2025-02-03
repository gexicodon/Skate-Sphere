<script>
  import Icon from "./Icon.svelte";


</script>

<div class='footer'>
    <div class='content'>
        <h1 class='logo'>SkateSphere</h1>
        <div class='contacts'>
            <a href='https://t.me/skatesphere'>
            <Icon id='telegram' width='48' height='48'/>
        </a>
        <a href='https://github.com/gexicodon'>
            <Icon id='github' width = '48' height='48'/>
        </a>
        </div>
        <h2 class='footer_text'>Проект создан в образовательных целях. </h2>
    </div>
</div>

<style lang="scss">
    .footer {
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 80px 86px;
        gap: 10px;
        background: #1E1E1E;
        border-top: 1px solid white;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 33px;
        .logo {
            font-family: "Syne", sans-serif;
            font-weight: 800;
            font-size: 40px;
            text-decoration: none;
            color:white;
        }
        .footer_text {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
            display: flex;
            align-items: center;
        }
    .contacts {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 40px;
        h2 {
            font-family: "Montserrat";
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
            color: #FFFFFF;
            display: flex;
            align-items: center;
        }
    }
    }
</style>



