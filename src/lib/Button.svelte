<script>
export let text;
export let link;
</script>
<a href={link} aria-label="Register">
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
        font-family: 'Montserrat';
        font-weight: 800;
        font-size: 48px;
    }
    :hover {
        color: #870000;
    }
    }

</style>

