<script lang="ts">
	import { animate } from "motion";
	import FancyBackground from "./FancyBackground.svelte";
    import {expoInOut, expoOut} from "svelte/easing";

    let main: HTMLDivElement;
    let heading: HTMLHeadingElement;
    let cta: HTMLAnchorElement;
    let logo: HTMLDivElement;

    async function go() {
        animate(heading, {
            y: [-heading.offsetHeight*5, 0],
            opacity: [0, 1],
        }, {
            duration: 2,
            easing: expoOut,
        });
        animate(cta, {
            y: [heading.offsetHeight*5, 0],
            opacity: [0, 1],
        }, {
            duration: 2,
            easing: expoOut,
        });
        animate(main, {
            scale: [0.5, 1]
        }, {
            duration: 2,
            easing: expoInOut,
        });
        animate(logo, {
            y: [-logo.offsetHeight, 0],
            opacity: [0, 1],
        }, {
            duration: 2,
            delay: 1,
            easing: expoOut,
        });
    }

</script>

<svelte:head>
    <title>Green Home</title>
</svelte:head>

<FancyBackground on:ready={go}/>

<main>
    <div class="responsive" bind:this={logo}>
        <img src='images/logo.png' alt='Green Home Logo' />
    </div>
    <div class="center" bind:this={main}>
        <h1 bind:this={heading}>Power Your Home Through Sustainable Energy</h1>
        
        <a href="about" bind:this={cta}>
            <button>Learn More</button>
        </a>
    </div>
</main>


<style lang="scss">
    .responsive {
        width:100%;
        text-align:center;
        position:absolute;
        margin-top:1rem;
        opacity: 0;
    }
    img{
        max-width:100%;
    }
    .center{
        display:flex;
        flex-direction:column;
        gap: 2em;
        justify-content: center;
        align-items: center;
        height:100dvh;
        > * {
            opacity: 0;
        }
    }
    a{
        text-decoration:none;
        display:flex;
        justify-content:center;
    }
    button{
        color:white;
        outline: 3px solid #79FF8F;
        font-size:20px;
        border-radius: 20px;
        background-color:rgba(255,255,255,0.25);
        padding: 15px 30px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        box-shadow: 0 0 1em rgba(0, 0, 0, .5);
        border:none;
        cursor: pointer;
        outline-offset:0;
        transition: none .5s cubic-bezier(0, 0, 0, 1);
        transition-property:outline-offset, scale;
        display:flex;
        justify-content:center;
    }
    button:hover{
        outline: 3px solid #79FF8F;
        outline-offset:5px;
        cursor:pointer;
    }
    button:active {
        
        scale: 0.9;
    }
    h1{
        display:flex;
        justify-content:center;
        // text-shadow: 0 0 10px raba(0 0 0 50%);
        text-shadow: 0 0 .2em rgba(0,0,0,0.43);
        font-size:50px;
        text-align:center;
        padding: 0 1em;
        margin: 0;
        
        color:white;
    }


    @media (max-width:650px){
        .responsive{
            visibility: hidden;
        }
    }
</style>