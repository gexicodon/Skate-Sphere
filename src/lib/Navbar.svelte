<script>
  import Icon from './Icon.svelte';

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<div class="header">
  <a href="/" class="logo">SkateSphere</a>
  <nav>
    <a href="/maps">Карты</a>
    <a href="/tricks">Трюки</a>
    <a href="/news">Новости</a>
    <a href="/">Советы</a>
    <a href="/">События</a>
  </nav>
  <div class="icons">
    <Icon id="notification" width="50" height="50"></Icon>
    <Icon id="message" width="50" height="50"></Icon>
    <Icon id="profile" width="50" height="50"></Icon>
  </div>
</div>

<div class='navhamburger'>
  <div class='navhamburger_header'>
  <a href="/" class="ham_logo">SkateSphere</a>
  <button on:click={toggleMenu} class:open={isOpen}>
  <Icon id='hamburger-menu' width='50' height='50'></Icon>
  </button>
  </div>
  <div class='menu' style='display: {isOpen ? 'flex' : 'none'};'>
    <a class='link' href="/maps">Карты</a>
    <a class='link' href="/tricks">Трюки</a>
    <a class='link' href="/news">Новости</a>
    <a class='link' href="/">Советы</a>
    <a class='link' href="/">События</a>
  </div>
</div>

<style lang="scss">
  .header {
    width: 100%;
    height: 106px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 34px;
    background-color: #1e1e1e;
    position: sticky;
    .logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 40px;
      text-decoration: none;
      color: white;
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
      gap: 116px;
      font-family: 'Montserrat', serif;
      font-weight: 500;
      a {
        color: white;
      }
      a:hover {
        color: #870000;
      }
    }
  }

  .navhamburger {
    display: none; 
    flex-direction: column;
  }
  .navhamburger_header {
    height: 106px;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding: 25px 34px;
    background-color: #1e1e1e;
  }

  .menu {
      flex-direction: column;
      align-items: center;
      padding: 0px;
      gap: 53px;
      font-family: 'Montserrat', serif;
      font-weight: 500;
      padding: 30px;
      background-color: #1e1e1e;
    }

      .link {
        color: white;
        width: 100%;
        text-align: center;
      }
      .link:hover {
        color: #870000;
      }
  

  .ham_logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 40px;
      text-decoration: none;
      color: white;
      width: max-content;
      
    }
  @media (max-width: 1550px) {
    .header {
      display: none; 
    }
    .navhamburger {
      display: flex; 
    }
    .navhamburger_header {
      display: flex;
    }
  }
</style>
