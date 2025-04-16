<script>
    export let title;
    export let description;
</script>

<div class='card'>
    <div class='card_txt'>
        <h1>{title}</h1>
        <h2>{description}</h2>
    </div>
</div>

<style lang="scss">
    .card {
      display: flex;
      flex-direction: row;
      justify-content: center; 
      align-items: center; 
      width: 1076px;
      height: 429px;
      padding: 30px; 
      background: #ffffff; 
      border-radius: 20px; 
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
      transition: transform 0.3s ease, box-shadow 0.3s ease; 
  
      &:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2); 
      }
    }
  
    .card_txt {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 40px; 
      width: 100%; 
      max-width: 800px; 
  
      h1 {
        color: #1e1e1e;
        width: 100%; 
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 800;
        font-size: 48px;
        line-height: 1.2; 
        text-decoration: none; 
        margin: 0; 
      }
  
      h2 {
        width: 100%; 
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 1.5;
        color: #555; 
        margin: 0; 
      }
    }


    @media (max-width: 1200px) {
      .card {
        width: 90%; 
        height: auto; 
        padding: 20px; 
        gap: 40px; 
      }
  
      .card_txt {
        gap: 20px; 
  
        h1 {
          font-size: 36px; 
        }
  
        h2 {
          font-size: 20px; 
        }
      }
    }

    @media (max-width: 768px) {
      .card {
        flex-direction: column; 
        gap: 20px; 
        padding: 15px; 
      }
  
      .card_txt {
        align-items: center; 
        text-align: center; 
  
        h1 {
          font-size: 28px; 
        }
  
        h2 {
          font-size: 18px; 
        }
      }
    }

    @media (max-width: 480px) {
      .card {
        padding: 10px; 
        gap: 15px; 
      }
  
      .card_txt {
        gap: 10px; 
  
        h1 {
          font-size: 24px; 
        }
  
        h2 {
          font-size: 16px; 
        }
      }
    }
</style>