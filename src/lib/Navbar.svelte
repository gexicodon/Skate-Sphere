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
  </nav>
  <div class="icons">
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
  </div>
</div>

<style lang="scss">
  .header {
    width: 100%;
    height: 106px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 34px;
    background-color: #1e1e1e;
    position: sticky;
    top: 0;
    z-index: 1000;

    .logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 40px;
      text-decoration: none;
      color: white;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.8;
      }
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
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #870000;
        }
      }
    }
  }

  .navhamburger {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: #1e1e1e;
    position: sticky;
    top: 0;
    z-index: 1000;

    .navhamburger_header {
      height: 106px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 25px 34px;
      background-color: #1e1e1e;
    }

    .menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      gap: 30px;
      font-family: 'Montserrat', serif;
      font-weight: 500;
      background-color: #1e1e1e;

      .link {
        color: white;
        width: 100%;
        text-align: center;
        font-size: 18px;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover {
          color: #870000;
        }
      }
    }
  }

  .ham_logo {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 40px;
    text-decoration: none;
    color: white;
    width: max-content;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 1550px) {
    .header {
      display: none;
    }

    .navhamburger {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    .navhamburger {
      .navhamburger_header {
        height: 80px;
        padding: 15px 20px;
      }

      .ham_logo {
        font-size: 32px;
      }

      .menu {
        padding: 15px;
        gap: 20px;

        .link {
          font-size: 16px;
        }
      }
    }
  }

  @media (max-width: 480px) {
    .navhamburger {
      .navhamburger_header {
        height: 70px;
        padding: 10px 15px;
      }

      .ham_logo {
        font-size: 28px;
      }

      .menu {
        padding: 10px;
        gap: 20px;

        .link {
          font-size: 14px;
        }
      }
    }
  }
</style>