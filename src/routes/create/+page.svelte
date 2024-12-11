<script>
    import { Post } from "$lib/models/post";
    import { Trick } from "$lib/models/trick";
    import { db } from "$lib/scripts/firebase";
    import { ref, push, set } from "firebase/database";

    let post = new Post();
    let trick = new Trick();
</script>

<div>
    <h1>создать пост)</h1>
    <input bind:value={post.title} placeholder="Заголовок" />
    <input bind:value={post.description} placeholder="Описание" />
    <input bind:value={post.cover} placeholder="URL обложки" />
    <input bind:value={post.link} placeholder="URL обложки" />
    <input bind:value={post.created}  />
    <input type='checkbox' bind:checked={post.published} name='опубликовано'>
    <textarea bind:value={post.content}  placeholder="Содержимое записи" />

    <button on:click={() => {
        push(ref(db, "/posts"), post);
        post = new Post();
    }}>сохранить</button>

<h1>создать трюк)</h1>
<input bind:value={trick.trickTitle} placeholder="Заголовок" />
<input bind:value={trick.trickDescription} placeholder="Описание" />
<input bind:value={trick.trickLink} placeholder="ссылка на страницу" />
<input bind:value={trick.trickVideo} placeholder="ссылка на видео" />

<button on:click={() => {
    push(ref(db, "/tricks"), trick);
    trick = new Trick();
}}>сохранить</button>
</div>