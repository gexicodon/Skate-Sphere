<script>
    export let text;
    export let link;
  </script>
  
  <a href={link} aria-label="Register">
    <div class='button_container'>
      <span>{text}</span>
    </div>
  </a>
  
  <style lang="scss">
    .button_container {
      width: 726px;
      height: 129px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 10px;
      background: #1E1E1E;
      border-radius: 30px;
      transition: background 0.3s ease, color 0.3s ease;
  
      span {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 48px;
        transition: color 0.3s ease;
      }
  
      &:hover {
        background: #870000;
  
        span {
          color: white;
        }
      }
    }
  

    @media (max-width: 1200px) {
      .button_container {
        width: 600px;
        height: 110px;
  
        span {
          font-size: 40px;
        }
      }
    }
  
    @media (max-width: 768px) {
      .button_container {
        width: 450px;
        height: 90px;
        border-radius: 20px;
  
        span {
          font-size: 32px;
        }
      }
    }
  
    @media (max-width: 480px) {
      .button_container {
        width: 300px;
        height: 70px;
        border-radius: 15px;
  
        span {
          font-size: 24px;
        }
      }
    }
  
    @media (max-width: 360px) {
      .button_container {
        width: 250px;
        height: 60px;
  
        span {
          font-size: 20px;
        }
      }
    }
  </style>