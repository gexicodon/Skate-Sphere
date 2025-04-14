<script>
    import { Post } from "$lib/models/post";
    import { Point } from "$lib/models/point";
    import { db } from "$lib/scripts/firebase";
    import { ref, push, set } from "firebase/database";
    import { TrickContent } from "$lib/models/trick";
  import Navbar from "$lib/Navbar.svelte";

    let post = new Post();
    let point = new Point();
    let trick = new TrickContent();
</script>
<Navbar />
<div class="admin-panel">
    <div class="forms-container">

        <div class="form-card">
            <h2>Создать пост</h2>
            <div class="form-group">
                <label>Заголовок</label>
                <input bind:value={post.title} placeholder="Введите заголовок" />
            </div>
            <div class="form-group">
                <label>Описание</label>
                <input bind:value={post.description} placeholder="Введите описание" />
            </div>
            <div class="form-group">
                <label>URL обложки</label>
                <input bind:value={post.cover} placeholder="Введите URL изображения" />
            </div>
            <div class="form-group">
                <label>Ссылка (slug)</label>
                <input bind:value={post.slug} placeholder="Введите ссылку" />
            </div>
            <div class="form-group">
                <label>Дата создания</label>
                <input type="datetime-local" bind:value={post.created} />
            </div>
            <div class="form-group checkbox-group">
                <input type="checkbox" id="post-published" bind:checked={post.published} />
                <label for="post-published">Опубликовано</label>
            </div>
            <div class="form-group">
                <label>Содержимое</label>
                <textarea bind:value={post.content} placeholder="Введите содержимое поста"></textarea>
            </div>
            <button class="save-btn" on:click={() => {
                push(ref(db, "/posts"), post);
                post = new Post();
            }}>Сохранить пост</button>
        </div>


        <div class="form-card">
            <h2>Создать метку</h2>
            <div class="form-group">
                <label>Заголовок</label>
                <input bind:value={point.title} placeholder="Введите заголовок" />
            </div>
            <div class="form-group">
                <label>Описание</label>
                <input bind:value={point.description} placeholder="Введите описание" />
            </div>
            <div class="form-group">
                <label>Широта</label>
                <input type="number" step="0.000001" bind:value={point.latitude} placeholder="Введите широту" />
            </div>
            <div class="form-group">
                <label>Долгота</label>
                <input type="number" step="0.000001" bind:value={point.longitude} placeholder="Введите долготу" />
            </div>
            <div class="form-group">
                <label>Фото</label>
                <input bind:value={point.image} placeholder="Введите URL фото" />
            </div>
            <div class="form-group">
                <label>Ссылка (slug)</label>
                <input bind:value={point.slug} placeholder="Введите ссылку" />
            </div>
            <button class="save-btn" on:click={() => {
                push(ref(db, "/points"), point);
                point = new Point();
            }}>Сохранить метку</button>
        </div>

 
        <div class="form-card">
            <h2>Создать трюк</h2>
            <div class="form-group">
                <label>Заголовок</label>
                <input bind:value={trick.trickTitle} placeholder="Введите заголовок" />
            </div>
            <div class="form-group">
                <label>Описание</label>
                <input bind:value={trick.trickDescription} placeholder="Введите описание" />
            </div>
            <div class="form-group">
                <label>Туториал</label>
                <textarea bind:value={trick.content} placeholder="Введите описание трюка"></textarea>
            </div>
            <div class="form-group">
                <label>Ссылка (slug)</label>
                <input bind:value={trick.slug} placeholder="Введите ссылку" />
            </div>
            <button class="save-btn" on:click={() => {
                push(ref(db, "/tricks"), trick);
                trick = new TrickContent();
            }}>Сохранить трюк</button>
        </div>
    </div>
</div>

<style lang="scss">
    .admin-panel {
        padding: 2rem;
        background-color: #f5f7fa;
        min-height: 80vh;
    }

    .forms-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    .form-card {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        transition: transform 0.2s, box-shadow 0.2s;

        &:hover {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        h2 {
            margin-top: 0;
            margin-bottom: 1.5rem;
            color: #2d3748;
            font-size: 1.25rem;
            font-family: 'Montserrat';
            font-weight: 800;
        }
    }

    .form-group {
        margin-bottom: 1rem;

        label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: #4a5568;
            font-size: 0.875rem;
            font-family: 'Montserrat';
        }

        input, textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            font-size: 1rem;
            transition: border-color 0.2s;
            font-family: 'Montserrat';

            &:focus {
                outline: none;
                border-color: #4299e1;
            }
        }

        textarea {
            min-height: 100px;
            resize: vertical;
        }
    }

    .checkbox-group {
        display: flex;
        align-items: center;

        input {
            width: auto;
            margin-right: 0.5rem;
        }

        label {
            margin-bottom: 0;
        }
    }

    .save-btn {
        width: 100%;
        padding: 0.75rem;
        background-color: #870000;
        color: white;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
        margin-top: 1rem;
        font-family: 'Montserrat';

        &:hover {
            background-color: #490000;
        }
    }

    @media (max-width: 768px) {
        .forms-container {
            grid-template-columns: 1fr;
        }
    }
</style>