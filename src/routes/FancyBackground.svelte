<script lang="ts">
	import { onMount } from "svelte";


    let bgi: HTMLImageElement;
    let bgv: HTMLVideoElement;
    let mgi: HTMLImageElement;
    let mgv: HTMLVideoElement;
    let fgi: HTMLImageElement;
    let fgv: HTMLVideoElement;

    
    const BGDIST = 0;
    const MGDIST = 100;
    const FGDIST = 200;
    const SPEED = .01;

    let bgDestX = 0;
    let bgDestY = 0;
    let bgCurX = 0;
    let bgCurY = 0;
    let mgDestX = 0;
    let mgDestY = 0;
    let mgCurX = 0;
    let mgCurY = 0;
    let fgDestX = 0;
    let fgDestY = 0;
    let fgCurX = 0;
    let fgCurY = 0;

    let currentVersion = 0;

    const VERSIONS = [
        {
            bg: {
                type: "img",
                url: "/images/fog.webp",
                blend: "normal"
            },
            mg: {
                type: "video",
                url: "/videos/wind_turbine_1.webm",
                blend: "screen"
            },
            fg: {
                type: "img",
                url: "/images/forest.webp",
                blend: "darken"
            }
        },
        {
            bg: {
                type: "img",
                url: "/images/fog.webp",
                blend: "normal"
            },
            mg: {
                type: "video",
                url: "/videos/wind_turbine_2.webm",
                blend: "screen"
            },
            fg: {
                type: "img",
                url: "/images/forest.webp",
                blend: "darken"
            }
        },
        {
            fg: {
                type: "video",
                url: "/videos/wind_turbine_2.webm",
                blend: "darken"
            },
            mg: {
                type: "img",
                url: "/images/forest_2.webp",
            }
        },
        {
            mg: {
                type: "video",
                url: "/videos/wind_turbine_1.webm",
            },
            fg: {
                type: "img",
                url: "/images/forest.webp",
                blend: "multiply"

            }
        },
        {
            mg: {
                type: "video",
                url: "/videos/wind_turbine_2.webm",
            },
            fg: {
                type: "img",
                url: "/images/forest.webp",
                blend: "lighten"
            }
        },
    ]

    function switchTo(idx: number) {
        const V = VERSIONS[idx];
        if (V.bg) {
            if (V.bg.type === "img") {
                bgi.src = V.bg.url;
                bgv.src = "";
            } else {
                bgv.src = V.bg.url;
                bgi.src = "";
            }
            bgi.style.mixBlendMode = V.bg.blend ?? "normal";
            bgv.style.mixBlendMode = V.bg.blend ?? "normal";
        } else {
            bgi.src = "";
            bgv.src = "";
        }
        if (V.mg) {
            if (V.mg.type === "img") {
                mgi.src = V.mg.url;
                mgv.src = "";
            } else {
                mgv.src = V.mg.url;
                mgi.src = "";
            }
            mgi.style.mixBlendMode = V.mg.blend ?? "normal";
            mgv.style.mixBlendMode = V.mg.blend ?? "normal";
        } else {
            mgi.src = "";
            mgv.src = "";
        }
        if (V.fg) {
            if (V.fg.type === "img") {
                fgi.src = V.fg.url;
                fgv.src = "";
            } else {
                fgv.src = V.fg.url;
                fgi.src = "";
            }
            fgi.style.mixBlendMode = V.fg.blend ?? "normal";
            fgv.style.mixBlendMode = V.fg.blend ?? "normal";
        } else {
            fgi.src = "";
            fgv.src = "";
        }
    }

    function updatePositionDestinations(e: MouseEvent) {
        const RELX = (-e.x/innerWidth + .5)*2;
        const RELY = (-e.y/innerHeight + .5)*2;

        bgDestX = RELX*BGDIST;
        bgDestY = RELY*BGDIST;
        mgDestX = RELX*MGDIST;
        mgDestY = RELY*MGDIST;
        fgDestX = RELX*FGDIST;
        fgDestY = RELY*FGDIST;
    }

    function updatePositions() {

        bgCurX = bgCurX + (bgDestX - bgCurX)*SPEED;
        bgCurY = bgCurY + (bgDestY - bgCurY)*SPEED;
        mgCurX = mgCurX + (mgDestX - mgCurX)*SPEED;
        mgCurY = mgCurY + (mgDestY - mgCurY)*SPEED;
        fgCurX = fgCurX + (fgDestX - fgCurX)*SPEED;
        fgCurY = fgCurY + (fgDestY - fgCurY)*SPEED;

        bgi.style.translate = `${bgCurX}px ${bgCurY}px`;
        bgv.style.translate = `${bgCurX}px ${bgCurY}px`;
        mgi.style.translate = `${mgCurX}px ${mgCurY}px`;
        mgv.style.translate = `${mgCurX}px ${mgCurY}px`;
        fgi.style.translate = `${fgCurX}px ${fgCurY}px`;
        fgv.style.translate = `${fgCurX}px ${fgCurY}px`;
        requestAnimationFrame(updatePositions);
    }

    function resize() {
        const BIGGER = Math.max(innerWidth, innerHeight)
        bgi.style.scale = `${1 + BIGGER / (BIGGER + BGDIST)}`;
        bgv.style.scale = `${1 + BIGGER / (BIGGER + BGDIST)}`;
        mgi.style.scale = `${1 + BIGGER / (BIGGER + MGDIST)}`;
        mgv.style.scale = `${1 + BIGGER / (BIGGER + MGDIST)}`;
        fgi.style.scale = `${1 + BIGGER / (BIGGER + FGDIST)}`;
        fgv.style.scale = `${1 + BIGGER / (BIGGER + FGDIST)}`;
    }

    onMount(()=>{
        switchTo(currentVersion);
        updatePositions();
        resize()
        setInterval(()=>{
            if (Math.random() > .95) {
                const NEW = Math.floor(Math.random()*VERSIONS.length);
                if (NEW !== currentVersion) {
                    currentVersion = NEW
                    switchTo(currentVersion);
                }
            }
        }, 250)
    })
</script>

<svelte:document on:mousemove={updatePositionDestinations} on:resize={resize}/>
<svelte:head>
    <link rel="prefetch" href="/videos/wind_turbine_1.webm">
    <link rel="prefetch" href="/videos/wind_turbine_2.webm">
    <link rel="prefetch" href="/videos/wind_turbine_3.webm">
</svelte:head>
<div class="main">

    <div class="layers">

        <div class="bg">
            <img bind:this={bgi} src="" alt="" />
            <video bind:this={bgv} src="" autoplay loop></video>
        </div>
        <div class="mg">
            <img bind:this={mgi} src="" alt="" />
            <video bind:this={mgv} src="" autoplay loop></video>
        </div>
        <div class="fg">
            <img bind:this={fgi} src="" alt="" />
            <video bind:this={fgv} src="" autoplay loop></video>
        </div>
    </div>

    <div class="overlay" style="position: absolute;">
    
    </div>
    
</div>

<style lang="scss">
    .main {
        overflow: hidden;
        position: fixed;
        width: 100vw;
        height: 100dvh;
    }
    video, img {
        position: absolute;
        inset: 0;
        width: 100vw;
        height: 100dvh;
        object-fit: cover;
        display: block;
    }
    .layers {
        filter: brightness(1);
    }
    .overlay {
        width: 100vw;
        height: 100dvh;
        background: radial-gradient(100% 100% at 50% 50%, rgba(255, 255, 255, 0) 50%, rgb(255, 255, 255)100%);
        // mix-blend-mode: overlay;
    }
</style>