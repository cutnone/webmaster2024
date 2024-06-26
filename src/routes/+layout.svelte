<script lang="ts">
	import { fly, slide } from "svelte/transition";

    let showing = false;
    let navWidth = 0;
    let main: HTMLDivElement
    let nav: HTMLElement;

    export let visible = true;
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

<svelte:head>
    <link rel="shortcut icon" href="/greenhome/images/houseFavicon.png" type="image/x-icon">
</svelte:head>
<a class:invisible={!visible} href="/greenhome" class="home">
    <img src="/greenhome/images/houseFavicon.png" alt="">
</a>
<div class:invisible={!visible} class="contain" bind:this={main} class:open={showing}>
    <nav bind:this={nav} bind:offsetWidth={navWidth}>
        <a on:click={navigate} tabindex={showing ? 0 : -1} data-sveltekit-preload-data href="/greenhome">Home</a>
        <a on:click={navigate} tabindex={showing ? 0 : -1} data-sveltekit-preload-data href="/greenhome/about">About</a>
        <a on:click={navigate} tabindex={showing ? 0 : -1} data-sveltekit-preload-data href="/greenhome/energysources">Energy Sources</a>
        <a on:click={navigate} tabindex={showing ? 0 : -1} data-sveltekit-preload-data href="/greenhome/financialbonuses">Financial Bonuses</a>
        <a on:click={navigate} tabindex={showing ? 0 : -1} data-sveltekit-preload-data href="/greenhome/references">References</a>
    </nav>
    <button on:click={toggleNav}>
        {#if showing}
            <img 
                in:fly={{y:-100}} 
                out:fly={{y:-100}} 
                src="/greenhome/images/icons/x.svg" 
                alt=""
            >
        {:else}
            <img 
                in:fly={{y:100}} 
                out:fly={{y:100}} 
                src="/greenhome/images/icons/menu-burger.svg" 
                alt=""
            >
        {/if}
    </button>
    
</div>

    

<slot>

</slot>

<style lang="scss">
    nav a {
        text-decoration:none;
        color:white;
        font-size: 3em;
        font-weight: 100;
        text-align: right;
    }

    .invisible {
        opacity: 0;
    }

    .home {
        position: fixed;
        inset: 0;
        padding: 1rem 0 0 1rem;
        width: fit-content;
        height: fit-content;
        filter: drop-shadow(0 0 .4rem rgba(0, 0, 0, 1));
        transition: opacity .5s cubic-bezier(0, 0, 0, 1);
        img {
            aspect-ratio: 1 / 1;
            width: 4em;
        }
        z-index: 1;
    }

    .contain {
        display: flex;
        flex-direction: row-reverse;
        align-items: start;
        position: fixed;
        padding: 1rem;
        gap: 1em;
        top: 0;
        right: 0;
        translate: calc(var(--nav-width) + 1em) 0;
        transition: none .5s cubic-bezier(0, 0, 0, 1);
        transition-property: opacity, translate;
        z-index: 1;
        &.open {
            translate: 0;
        }
        &:not(.open) {
            height: 0;
        }
    }

    nav, button {
        background-color: #ffffff33;
        backdrop-filter: blur(10px) brightness(0.5);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid #ffffffaa;
        border-radius: 1rem;
    }

    button {
        color: white;
        padding: 1rem;
        // width: fit-content;
        z-index: 1;
        width: calc(1em + 2rem + 2px);
        min-width: calc(1em + 1rem + 2px);
        font-weight: 100;
        font-size: xx-large;
        font-family: inherit;
        display: flex;
        aspect-ratio: 1/1;
        align-items: center;
        cursor: pointer;
        box-shadow: inset 0 0 0px #00ff0000;
        transition: none .5s cubic-bezier(0, 0, 0, 1);
        transition-property: box-shadow, scale, translate, margin-top;
        overflow: hidden;
        &:hover, &:focus-visible {
            box-shadow: inset 0 0 1em #00ff0055;
            scale: 1.1;
        }
        &:active {
            box-shadow: inset 0 0 2em #00ff0055;
            scale: 1.05;
        }
        img {
            filter: invert(1);
            position: absolute;
            width: 1em;
            font-size: inherit;
        }
    }

    nav{

        display: flex;
        flex-direction: column;
        // gap: 5em;
        width: fit-content;
        padding: 3em;
        font-variation-settings: "wght" 100;
        transition: box-shadow .5s cubic-bezier(0, 0, 0, 1);
        overflow-x: hidden;
        text-align: right;
        a {
            line-height: 2;
            transition: none .5s cubic-bezier(0, 0, 0, 1);
            transition-property: padding, font-variation-settings;
            white-space: nowrap;
        }
        a:hover, a:focus-visible {
            padding-right: .5ch;
            font-variation-settings: "wght" 700;
        }
        a:active:hover {
            font-variation-settings: "wght" 300;
            padding-right: .6ch;
            
        }
        box-shadow: inset 0 0 0px #00ff0000, 0 0 0em #00ff0000;
        &:has(a:active:hover) {
            box-shadow: inset 0 0 3em #00ff0055, 0 0 3em #00ff0055;
        }
        
        
    }

    @media screen and (max-width: 590px) {
        nav {
            width: calc(100vw - 2rem);
            height: calc(100dvh - 2rem);
            font-size: min(3dvw, 1em);
            justify-content: space-evenly;
        }

        .open button {
            margin-top: 1em;
            translate: calc(( 2em + 3rem + 2px )) 0;
        }
    }

</style>