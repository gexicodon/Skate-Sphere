<script>
  export let trick;
  import Icon from './Icon.svelte';
</script>

<div class="trick">
  <h2 class="title">{trick.trickTitle}</h2>
  <p class="description">{trick.trickDescription}</p>
</div>
<div class="content">
  <p>{trick.content}</p>
  <div class="back-btn">
      <a href="/tricks">
          <Icon id="arrow-left" width="50" height="50" />
          <h2>Назад</h2>
      </a>
  </div>
</div>

<style lang="scss">
  .trick {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 108px;
      gap: 20px; 
      width: 100%;
      min-height: 100px;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(135, 0, 0, 0.8)), url('/banner_img2.png');
      background-size: cover;
      background-position: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
      .title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
          font-size: 96px;
          color: white;
          margin: 0;
          z-index: 2;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      }

      .description {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 24px;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          z-index: 2;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      }
  }

  .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 108px;
      background-color: #1E1E1E;
      color: white;

      p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 24px;
          line-height: 1.6;
          margin: 0;
      }
  }

  .back-btn {
      margin-top: 40px;
      
      a {
          display: flex;
          align-items: center;
          gap: 20px;
          background-color: #870000;
          padding: 20px 30px;
          border-radius: 30px;
          text-decoration: none;
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 24px;
          transition: background-color 0.3s ease;

          &:hover {
              background-color: #a30000;
          }

          h2 {
              margin: 0;
          }
      }
  }

  @media (max-width: 1200px) {
      .trick {
          padding: 80px;
          min-height: 500px;

          .title {
              font-size: 72px;
          }

          .description {
              font-size: 20px;
          }
      }

      .content {
          padding: 80px;

          p {
              font-size: 20px;
          }
      }

      .back-btn {
          margin-top: 30px;
          
          a {
              padding: 18px 28px;
              font-size: 22px;
              gap: 18px;
          }
      }
  }

  @media (max-width: 768px) {
      .trick {
          padding: 60px;
          min-height: 400px;

          .title {
              font-size: 48px;
          }

          .description {
              font-size: 18px;
          }
      }

      .content {
          padding: 60px;

          p {
              font-size: 18px;
          }
      }

      .back-btn {
          margin-top: 25px;
          
          a {
              padding: 16px 24px;
              font-size: 20px;
              gap: 16px;
              
              Icon {
                  width: 40px;
                  height: 40px;
              }
          }
      }
  }

  @media (max-width: 480px) {
      .trick {
          padding: 40px;
          min-height: 300px;

          .title {
              font-size: 36px;
          }

          .description {
              font-size: 16px;
          }
      }

      .content {
          padding: 40px;

          p {
              font-size: 16px;
          }
      }

      .back-btn {
          margin-top: 20px;
          width: 100%;
          
          a {
              padding: 14px 20px;
              font-size: 18px;
              gap: 14px;
              justify-content: center;
              
              Icon {
                  width: 30px;
                  height: 30px;
              }
          }
      }
  }
</style>