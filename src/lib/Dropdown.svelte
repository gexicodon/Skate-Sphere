<script>
  import Trick from '$lib/Trick.svelte';
  import { db } from '$lib/scripts/firebase';
  import { onValue, ref } from 'firebase/database';
  import { onMount } from 'svelte';

  let tricks = new Array();

  onMount(() => {
        onValue(ref(db, '/tricks'), s => {
            if(s.exists()){
                tricks = Object.values(s.val());
            }
        });
    });
</script>

<style lang='scss'>

</style>