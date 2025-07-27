<script>

</script>

<div class='main'>
<h1>Для кого</h1>
<a href='/tricks'>
<div class='content1'>
<img src='skateboard.png' alt='скейт'/>
<p>Новичок и хочешь научиться кататься на скейте</p>
</div>
</a>
<a href='/maps'>
<div class='content2'>
    <img src='map.png' alt='карта'/>
<p>Хочешь найти новый скейтпарк</p>
</div>
</a>
<a href='/news'>
<div class='content3'>
    <img src='news.png' alt='скейт'/>
<p>Хочешь быть в курсе новостей из мира скейтбординга</p>
</div>
</a>
</div>

<style lang="scss">
    .main {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 49px 68px;
      gap: 63px;
      width: 1156px;
      height: 850px;
      background: #1E1E1E;
      border-radius: 30px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); 
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  
      &:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      }
  
      h1 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        display: flex;
        align-items: center;
        padding: 0;
        color: #FFFFFF;

      }
    }
  
    .content1, .content2, .content3 {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 22px 68px;
      gap: 130px;
      background: #FFFFFF;
      border-radius: 30px;
      width: 1020px;
      transition: transform 0.3s ease, box-shadow 0.3s ease; 
  
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2); 
      }
  
      img {
        height: 100px;
        width: 100px;

      }
  
      p {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #1E1E1E;

      }
    }
  

 
  
    @media (max-width: 1200px) {
      .main {
        width: 90%;
        height: auto;
        padding: 40px;
        gap: 40px;
      }
  
      .content1, .content2, .content3 {
        width: 100%;
        padding: 20px 40px;
        gap: 80px;
      }
  
      h1 {
        font-size: 48px;
      }
  
      p {
        font-size: 20px;
      }
    }
  

    @media (max-width: 768px) {
      .main {
        padding: 30px;
        gap: 30px;
        align-items: center;
      }
  
      .content1, .content2, .content3 {
        padding: 15px 30px;
        gap: 50px;
      }
  
      h1 {
        font-size: 36px;
      }
  
      p {
        font-size: 18px;
      }
  
      img {
        height: 80px;
        width: 80px;
      }
    }
  
  
    @media (max-width: 480px) {
      .main {
        padding: 20px;
        gap: 20px;
        align-items: center;
      }
  
      .content1, .content2, .content3 {
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        text-align: center;
      }
  
      h1 {
        font-size: 28px;
        text-align: center;
      }
  
      p {
        font-size: 16px;
      }
  
      img {
        height: 60px;
        width: 60px;
      }
    }
  </style>