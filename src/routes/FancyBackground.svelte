<script lang="ts">

</script>

<svelte:document />

<div>
    <img src="/images/geothermal.jpg" alt="">
    <img src="/images/solar-cells.png" alt="">
    <img src="/images/wind-energy.png" alt="">
    <img src="/images/hydropower.png" alt="">
    <img src="/images/biomass.jpg" alt="">
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
        transition: flex-grow 1s cubic-bezier(0, 0, 0, 1);

        &:hover {
            flex-grow: 1.5;
        }
    }
    @media screen and (max-aspect-ratio: 1/1) {
        div {
            flex-direction: column;
        }
    }
</style>