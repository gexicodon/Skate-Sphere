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
      background: #1E1E1E;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 60px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
  
      @media (max-width: 768px) {
        padding: 40px 20px;
      }
  
      @media (max-width: 480px) {
        padding: 30px 20px;
      }
    }
  
    .content {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
  
      @media (max-width: 768px) {
        gap: 20px;
      }
  
      @media (max-width: 480px) {
        gap: 15px;
      }
  
      .logo {
        font-family: "Syne", sans-serif;
        font-weight: 800;
        font-size: 40px;
        color: white;
        text-decoration: none;
        transition: opacity 0.3s ease;
  
        &:hover {
          opacity: 0.8;
        }
  
        @media (max-width: 768px) {
          font-size: 32px;
        }
  
        @media (max-width: 480px) {
          font-size: 28px;
        }
      }
  
      .contacts {
        display: flex;
        gap: 30px;
        align-items: center;
  
        @media (max-width: 768px) {
          gap: 20px;
        }
  
        @media (max-width: 480px) {
          gap: 15px;
        }
  
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, opacity 0.3s ease;
  
          &:hover {
            transform: translateY(-3px);
            opacity: 0.8;
          }
  
          Icon {
            width: 48px;
            height: 48px;
  
            @media (max-width: 768px) {
              width: 40px;
              height: 40px;
            }
  
            @media (max-width: 480px) {
              width: 36px;
              height: 36px;
            }
          }
        }
      }
  
      .footer_text {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        margin-top: 20px;
  
        @media (max-width: 768px) {
          font-size: 16px;
          margin-top: 15px;
        }
  
        @media (max-width: 480px) {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  </style>