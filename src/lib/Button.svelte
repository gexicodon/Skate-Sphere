<script>
export let text;
</script>
<a href='/' aria-label="Register">
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
    span {
        color: white;
        font-family: 'Syne';
        font-weight: 800;
        font-size: 48px;
        letter-spacing: -0.06em;
    }
    :hover {
        color: #870000;
    }
    }

</style>

