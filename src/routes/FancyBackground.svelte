<script lang="ts">
	import { afterNavigate } from "$app/navigation";
	import wait from "$lib/utilities";
	import { animate, stagger } from "motion";
	import { createEventDispatcher, onMount } from "svelte";
    import {expoInOut, expoOut, quintOut, sineOut} from "svelte/easing"

    let img1: HTMLImageElement;
    let img2: HTMLImageElement;
    let img3: HTMLImageElement;
    let img4: HTMLImageElement;
    let img5: HTMLImageElement;

    const DP = createEventDispatcher();

    let t = 0;
    let rt = 0;

    const SLIDE_DUR = 2;

    afterNavigate((e)=>{
        console.log(e.from);
        
        if (!e.from?.url) {
            runAnim();
        }
        else {
            animate([img1, img2, img3, img4, img5], {
                filter: ["brightness(1)", "brightness(0.5)"],
            }, {
                duration: .5,
                delay: stagger(.1),
            }).finished
            
            DP("ready");
        }
    })

    async function runAnim() {
        const MQ = matchMedia("screen and (max-aspect-ratio: 1/1)");
        if (!MQ.matches) {
            animate([img1, img2, img3, img4, img5], {
                y: -img1.offsetHeight+1,
                opacity: 0,
            }, {
                duration: 0,
            });
        } else {
            animate([img1, img2, img3, img4, img5], {
                x: -img1.offsetWidth+1,
                opacity: 0,
            }, {
                duration: 0,
            });
        }
        Promise.any([Promise.allSettled([img1, img2, img3, img4, img5].map((v)=>{
            return new Promise((res)=>{
                v.onload = res;
            })
        })), wait(2000)]);
        await wait(1000);
        await animate([img1, img2, img3, img4, img5], {
            opacity: 1,
        }, {
            duration: 0,
        }).finished;
        if (!MQ.matches) {
            animate(img1, {
                y: [-img1.offsetHeight, 0],
            }, {
                duration: SLIDE_DUR,
                delay: 0,
                easing: expoOut,
            })
            animate(img2, {
                y: [img2.offsetHeight, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .1,
                easing: expoOut,
            })
            animate(img3, {
                y: [-img3.offsetHeight, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .2,
                easing: expoOut,
            })
            animate(img4, {
                y: [img4.offsetHeight, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .3,
                easing: expoOut,
            })
            animate(img5, {
                y: [-img5.offsetHeight, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .4,
                easing: expoOut,
            })
        } else {
            animate(img1, {
                x: [-img1.offsetWidth, 0],
            }, {
                duration: SLIDE_DUR,
                delay: 0,
                easing: expoOut,
            })
            animate(img2, {
                x: [img2.offsetWidth, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .1,
                easing: expoOut,
            })
            animate(img3, {
                x: [-img3.offsetWidth, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .2,
                easing: expoOut,
            })
            animate(img4, {
                x: [img4.offsetWidth, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .3,
                easing: expoOut,
            })
            animate(img5, {
                x: [-img5.offsetWidth, 0]
            }, {
                duration: SLIDE_DUR,
                delay: .4,
                easing: expoOut,
            })
        }
        

        await wait(SLIDE_DUR/2*1000);
        DP("ready");
        await animate([img1, img2, img3, img4, img5], {
            filter: ["brightness(1)", "brightness(0.5)"],
        }, {
            duration: .5,
            delay: stagger(.1),
        }).finished
    }


</script>

<svelte:document />

<img class="logo greenify" src='images/houseFavicon.png' alt='Green Home Logo' />

<div>
    <img bind:this={img1} src="images/hydropower.png" alt="">
    <img bind:this={img2} src="images/solar-cells.png" alt="">
    <img bind:this={img3} src="images/wind-energy.png" alt="">
    <img bind:this={img4} src="images/geothermal.jpg" alt="">
    <img bind:this={img5} src="images/biomass.jpg" alt="">
</div>

<style lang="scss">
    div {
        position: fixed;
        display: flex;
        align-items: stretch;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100dvh;
        z-index: -1;
    }
    img {
        object-fit: cover;
        flex-grow: 1;
        flex-basis: 0;
        min-width: 0;
        min-height: 0;
        // background-color: red;
    }
    .logo {
        position: fixed;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        z-index: -1;
    }
    .greenify {
        filter: brightness(0) saturate(100%) invert(90%) sepia(23%) saturate(1013%) hue-rotate(62deg) brightness(100%) contrast(101%) drop-shadow(0 0 5px #79FF8F);
    }
    @media screen and (max-aspect-ratio: 1/1) {
        div {
            flex-direction: column;
        }
    }
</style>