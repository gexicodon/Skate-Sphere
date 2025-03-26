<script>
    export let trick;
  </script>
  
  <div class="trick">
    <h2 class="title">{trick.trickTitle}</h2>
    <p class="description">{trick.trickDescription}</p>
  </div>
  <div class="content">
    <p>{trick.content}</p>
  </div>
  
  <style lang="scss">
    .trick {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding: 108px;
      gap: 20px; /* Уменьшил расстояние между title и description */
      width: 100%;
      min-height: 100px;
      position: relative;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url('your-background-image.jpg'); /* Добавьте фоновое изображение */
      background-size: cover;
      background-position: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
        z-index: 1;
      }
  
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
      }
  
      .title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        font-size: 96px;
        color: white;
        margin: 0;
        z-index: 2;
        text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease, text-shadow 0.3s ease;
      }
  
      .description {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 24px;
        color: rgba(255, 255, 255, 0.9);
        margin: 0;
        z-index: 2;
        text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
  
      &:hover .title {
        transform: translateY(-5px);
        text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.7);
      }
  
      &:hover .description {
        transform: translateY(-5px);
        opacity: 1;
      }
    }
  
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 108px;
      background-color: #1E1E1E;
      color: white;
      transition: background-color 0.3s ease;
  
      p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 1.6;
        margin: 0;
        transition: color 0.3s ease;
      }
  
      &:hover {
        background-color: #2a2a2a;
  
        p {
          color: #f0f0f0;
        }
      }
    }
  
    /* Медиазапросы для адаптации под разные устройства */
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
    }
  </style>