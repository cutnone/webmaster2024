<script lang="ts">
	import { onMount } from "svelte";


    let img1: HTMLImageElement;
    let img2: HTMLImageElement;
    let img3: HTMLImageElement;
    let img4: HTMLImageElement;
    let img5: HTMLImageElement;

    let t = 0;
    let rt = 0;


</script>

<svelte:document />

<div>
    <img bind:this={img1} src="/images/geothermal.jpg" alt="">
    <img bind:this={img2}  src="/images/solar-cells.png" alt="">
    <img bind:this={img3}  src="/images/wind-energy.png" alt="">
    <img bind:this={img4}  src="/images/hydropower.png" alt="">
    <img bind:this={img5}  src="/images/biomass.jpg" alt="">
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
        filter: brightness(.5);
    }
    img {
        object-fit: cover;
        flex-grow: 1;
        flex-basis: 0;
        min-width: 0;
        min-height: 0;
    }
    @media screen and (max-aspect-ratio: 1/1) {
        div {
            flex-direction: column;
        }
    }
</style>