<script>
  import Icon from "./Icon.svelte";
</script>

<div class='header'>
    <a href='/' class='logo'>SkateSphere</a>
    <nav>
        <a href='/'>Карты</a>
        <a href='/'>Трюки</a>
        <a href='/'>Новости</a>
        <a href='/'>Советы</a>
        <a href='/'>События</a>
    </nav>
    <div class='icons'>
        <Icon id="notification" width='50' height='50'></Icon>
    </div>
</div>

<style lang='scss'>
    .header {
        width: 100%;
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
    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap:116px;
        font-family: "Montserrat", serif;
        font-weight: 800;
        a {
            color:white;
        }
    }
    }
</style>

