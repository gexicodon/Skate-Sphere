<script>
    import { Post } from "$lib/models/post";
    import { Point } from "$lib/models/point";
    import { db } from "$lib/scripts/firebase";
    import { ref, push, set } from "firebase/database";

    let post = new Post();
    let point = new Point();
</script>

<div>
    <h1>создать пост</h1>
    <input bind:value={post.title} placeholder="Заголовок" />
    <input bind:value={post.description} placeholder="Описание" />
    <input bind:value={post.cover} placeholder="URL обложки" />
    <input bind:value={post.slug} placeholder="ссылка" />
    <input bind:value={post.created}  />
    <input type='checkbox' bind:checked={post.published} name='опубликовано'>
    <textarea bind:value={post.content}  placeholder="Содержимое записи" />

    <button on:click={() => {
        push(ref(db, "/posts"), post);
        post = new Post();
    }}>сохранить</button>
<h1>создать метку</h1>
<input bind:value={point.title} placeholder="Заголовок" />
<input bind:value={point.description} placeholder="Описание" />
<input bind:value={point.latitude} placeholder="широта" />
<input bind:value={point.longitude} placeholder="долгота" />
<input bind:value={point.image} placeholder="фото" />
<input bind:value={point.slug} placeholder="ссылка" />
<button on:click={() => {
    push(ref(db, "/points"), point);
    point = new Point();
}}>сохранить</button>
</div>