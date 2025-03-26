<script>
  import { TrickContent } from "./models/trick";
  export let trick = new TrickContent();
</script>

<div class="card">
  <div class="content">
    <h1>{trick.trickTitle}</h1>
    <div class="right-section">
      <p>{trick.trickDescription}</p>
      <button>
        <a href={`/tricks/${trick.slug}`}>Подробнее</a>
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%; /* Ширина компонента */
    max-width: 800px; /* Максимальная ширина */
    margin: 20px auto; /* Центрирование */
    padding: 20px;
    background: #373737;
    border-radius: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; /* Разделяем левую и правую части */
    width: 100%;
    gap: 20px; /* Расстояние между title и right-section */
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: #FFFFFF;
    margin: 0;
    white-space: nowrap; /* Заголовок не переносится на новую строку */
  }

  .right-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px; /* Расстояние между description и button */
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: #FFFFFF;
    margin: 0;
    white-space: nowrap; /* Описание не переносится на новую строку */
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background: #870000;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #a30000;
    }

    a {
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 20px;
      text-decoration: none;
    }
  }

  /* Медиазапросы для адаптивности */
  @media (max-width: 768px) {
    .card {
      width: 90%; /* Увеличиваем ширину на мобильных */
      padding: 15px;
    }

    .content {
      flex-direction: column; /* Элементы в столбик на мобильных */
      gap: 15px;
    }

    h1 {
      font-size: 28px; /* Уменьшаем размер заголовка */
      text-align: center; /* Центрируем заголовок */
    }

    .right-section {
      flex-direction: column; /* description и button в столбик */
      gap: 10px;
    }

    p {
      font-size: 18px; /* Уменьшаем размер описания */
      text-align: center; /* Центрируем описание */
    }

    button {
      width: 100%; /* Кнопка на всю ширину */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 24px; /* Еще меньше заголовок */
    }

    p {
      font-size: 16px; /* Еще меньше описание */
    }

    button {
      padding: 8px 16px; /* Уменьшаем padding кнопки */
    }
  }
</style>