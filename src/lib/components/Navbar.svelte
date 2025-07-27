<script>
  import Icon from './Icon.svelte';
  import { isMobile } from '../../stores/isMobile';
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

{#if !$isMobile}
<div class="w-full sticky top-0 z-[1000] flex flex-row justify-between  py-6 px-10 items-center bg-darkGray text-white">
  <a href="/" class="font-syne font-extrabold text-3xl ">SkateSphere</a>
  <nav class="flex flex-row gap-10 font-montserrat text-lg">
    <a href="/maps" class="hover:text-red-800">Карты</a>
    <a href="/tricks" class="hover:text-red-800">Трюки</a>
    <a href="/news" class="hover:text-red-800">Новости</a>
    <a href="/tips" class="hover:text-red-800">Советы</a>
  </nav>
    <a href='/login'>
    <Icon id="profile" width="50" height="50"></Icon>
  </a>
</div>
{/if}

{#if $isMobile}
  <div class='flex flex-row bg-darkGray text-white justify-between py-3 px-5 items-center'>
  <a href="/" class="font-syne font-extrabold text-2xl">SkateSphere</a>
  <button on:click={toggleMenu} class:open={isOpen}>
  <Icon id='hamburger-menu' width='50' height='50'></Icon>
  </button>
  </div>
  <div class={isOpen ? 'flex flex-col gap-3 py-3 px-5 h-full font-montserrat text-md ' : 'hidden'}>
    <a class='border-b-2 pb-2' href="/maps" on:click={toggleMenu}>Карты</a>
    <a class='border-b-2 pb-2' href="/tricks" on:click={toggleMenu}>Трюки</a>
    <a class='border-b-2 pb-2' href="/news" on:click={toggleMenu}>Новости</a>
    <a class='border-b-2 pb-2' href="/tips" on:click={toggleMenu}>Советы</a>
  </div>

{/if}
