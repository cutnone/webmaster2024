<script lang="ts">
    let showing = false;
    let navWidth = 0;
    let main: HTMLDivElement
    let nav: HTMLElement
    $: if (main) {
        main.style.setProperty("--nav-width", navWidth+"px")
    }

    function toggleNav() {
        showing = !showing
    }

    function navigate() {
        showing = false
        nav.animate([
            {},
            {
                offset: .02,
                boxShadow: "inset 0 0 3em #00ff0055, 0 0 30em #00ff00"
            }
        ], {
            duration: 1000,
            easing: "cubic-bezier(0, 0, 0, 1)"
        })
    }
</script>

<div class="contain" bind:this={main} class:open={showing}>
    <nav bind:this={nav} bind:offsetWidth={navWidth}>
        <a on:click={navigate} href="/">Home</a>
        <a on:click={navigate} href="/about">About</a>
        <a on:click={navigate} href="/energysources">Energy Sources</a>
        <a on:click={navigate} href="/references">References</a>
    </nav>
    <button on:click={toggleNav}>
        {#if showing}
            X
        {:else}
            Open Nav
        {/if}
    </button>
</div>

    

<slot>

</slot>

<style lang="scss">
    a{
        text-decoration:none;
        color:white;
        font-size: 3em;
        font-weight: 100;

    }

    .contain {
        display: flex;
        align-items: start;
        position: fixed;
        padding: 1em;
        gap: 1em;
        top: 0;
        left: 0;
        translate: calc(-1 * var(--nav-width) - 1em) 0;
        transition: translate .5s cubic-bezier(0, 0, 0, 1);
        &.open {
            translate: 0;
        }
    }

    nav, button {
        background-color: #00000055;
        backdrop-filter: blur(10px);
        border: 1px solid #ffffffaa;
        border-radius: 1rem;
    }

    button {
        color: white;
        padding: .5rem 1rem;
        width: fit-content;
        font-weight: 100;
        font-size: xx-large;
        font-family: inherit;
    }

    nav{

        display: flex;
        flex-direction: column;
        // gap: 5em;
        max-width: fit-content;
        padding: 3em;
        font-variation-settings: "wght" 100;
        transition: box-shadow .5s cubic-bezier(0, 0, 0, 1);
        a {
            line-height: 2;
            transition: none .5s cubic-bezier(0, 0, 0, 1);
            transition-property: padding, font-variation-settings;
        }
        a:hover, a:focus-visible {
            padding-left: .5ch;
            font-variation-settings: "wght" 700;
        }
        a:active:hover {
            font-variation-settings: "wght" 300;
            padding-left: .6ch;
            
        }
        box-shadow: inset 0 0 0px #00ff0000, 0 0 0em #00ff0000;
        &:has(a:active:hover) {
            box-shadow: inset 0 0 3em #00ff0055, 0 0 3em #00ff0055;
        }
        
        
    }

</style>