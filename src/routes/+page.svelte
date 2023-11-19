<script>
    let count=0;
    function increment(){
        count++;
    }
</script>
<h1>Welcome to SvelteKit, Kemith</h1>
<span>{count}</span>
<button on:click={increment}>increase</button>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
