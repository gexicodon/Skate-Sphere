<script>
  import Icon from "./Icon.svelte";
</script>

<div class='header'>
    <a href='/' class='logo'>SkateSphere</a>
    <nav>
        <a href='/maps'>Карты</a>
        <a href='/'>Трюки</a>
        <a href='/news'>Новости</a>
        <a href='/'>Советы</a>
        <a href='/'>События</a>
    </nav>
    <div class='icons'>
        <Icon id="notification" width='50' height='50'></Icon>
        <Icon id="message" width='50' height='50'></Icon>
        <Icon id='profile' width='50' height='50'></Icon>
    </div>
</div>

<style lang='scss'>
    .header {
        width: 100%;
        height: 106px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 25px 34px;
        background-color: #1E1E1E;
        position: sticky;
    .logo {
        font-family: "Syne", sans-serif;
        font-weight: 800;
        font-size: 40px;
        text-decoration: none;
        color:white;
    }
    .icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 23px;
    }
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap:116px;
        font-family: "Montserrat", serif;
        font-weight: 500;
        a {
            color:white;
        }
        a:hover {
            color: #870000;
        }
    }
    }
</style>

