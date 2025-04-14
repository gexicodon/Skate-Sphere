<script lang="ts">
    import { auth } from '$lib/scripts/firebase';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { goto } from '$app/navigation';
    import Navbar from '$lib/Navbar.svelte';
  
    let email = '';
    let password = '';
    let error = '';
  
    async function handleLogin() {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        goto('/admin');
      } catch (err) {
        error = "Неверный логин или пароль.";
      }
    }
</script>

<Navbar/>

<div class="login-page">
    <div class="login-container">
        <h1>Вход в админ-панель</h1>
        {#if error}<p class="error">{error}</p>{/if}
        <form on:submit|preventDefault={handleLogin}>
        <input type="email" bind:value={email} placeholder="Почта" required />
        <input type="password" bind:value={password} placeholder="Пароль" required />
        <button type="submit">Вход</button>
        </form>
    </div>
</div>
 
<style lang="scss">
    .login-page {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
        padding: 20px;
        box-sizing: border-box;
    }
    
    .login-container {
        width: 100%;
        max-width: 800px;
        padding: 2rem;
        background: white;
        border-radius: 30px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        
        h1 {
            text-align: center;
            margin-bottom: 1.5rem;
            font-family: 'Montserrat';
            font-weight: 800;
            font-size: 20px;
        }
        
        .error {
            color: red;
            text-align: center;
            font-family: 'Montserrat';
        }
        
        form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            
            input {
                padding: 0.75rem;
                border: 1px solid #ddd;
                border-radius: 4px;
                font-size: 1rem;
                font-family: 'Montserrat';
            }
            
            button {
                padding: 0.75rem;
                background: #870000;
                color: white;
                border: none;
                border-radius: 30px;
                font-size: 1rem;
                cursor: pointer;
                transition: background 0.3s;
                font-family: 'Montserrat';
                
                &:hover {
                    background: #5a0101;
                }
            }
        }
    }
</style>