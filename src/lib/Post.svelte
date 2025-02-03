<script>
  export let post;
</script>

<div class="post" style="background:linear-gradient( rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.5)100%), url({post.cover}); background-size: cover;">
  <h2 class="title">{post.title}</h2>
  <p class="date">{post.created}</p>
</div>
<div class='content'>
  <p>{post.content}</p>
</div>
<style lang="scss">
  .post {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 108px;
    gap: 60px;
    width: 100%;

    .title { 
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-size: 96px;
      display: flex;
      align-items: center;
      color: white;
    }
    .date {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      color: white;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 108px;
    background-color: #1E1E1E;
    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      color: white;
    }
  }
</style>
