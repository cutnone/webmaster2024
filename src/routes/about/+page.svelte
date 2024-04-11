<script lang="ts">
    import { animate, scroll } from "motion";
    import {onMount} from "svelte";
    let article: HTMLElement;
    let title: HTMLHeadingElement;
    let bigTitle: HTMLHeadingElement;
    
    onMount(()=>{
        scroll(animate(article, {
            backgroundColor: [null, "rgb(0, 0, 0, 0.5)", "rgb(0, 0, 0, 0.5)"],
        }, {
            offset: [0, .25],
            easing: ['ease-out', 'linear']
        }), {
            smooth: 10,
            axis: "y",
        });
        scroll(animate(title, {
            opacity: [null, "0", "0"],
        }, {
            offset: [0, .25],
            easing: ['ease-out', 'linear']
        }), {
            smooth: 10,
            axis: "y",
        });
        scroll(animate(bigTitle, {
            opacity: ["0", "0", "1", "1"],
        }, {
            offset: [0, .10, .35],
            easing: ['ease-out', 'linear']
        }), {
            smooth: 10,
            axis: "y",
        });
    })
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<main>
    <div class="big-title">
        <h1 bind:this={bigTitle}>About</h1>
    </div>
    <article bind:this={article}>
        <div class="title-container">
            <h1 class="main-title" bind:this={title}>About</h1>
        </div>
        <section>
            <h2>What is Green Home?</h2>
            <p>Green Home strives to provide U.S. homeowners with relevant information concerning green energy and how it can be used to replace fossil fuels and other threatening energy sources at home. On our website, we have highlighted major valuable green energy sources and initiatives you can take to incorporate these energy sources into your home and lifestyle. </p>
            <h2>What is Green Energy?</h2>
            <p>Green energy, also known as renewable energy, is energy from resources that are naturally replenished or unlimited on a human timescale. Common forms of green energy include sunlight, wind, water, and biomass. Renewable energy systems, which are technologies that harness these resources to generate energy, include solar power, wind power, hydropower, geothermal energy, and biomass energy. In homes and households, green energy can mean implementing one or multiple of these systems on a smaller scale.         </p>
            <h2>Why Green Energy?</h2>
            <p>Over the past several decades, a high global demand for fossil fuelsーmost notably oil, gas, and coalーhas severely worsened climate change, sparking a shift in weather patterns that has led to a sharp increase in the frequency of extreme weather. </p>
            <p>As a result, the environment is in danger, posing risks towards humanity and wildlife: </p>
            <ul>
                <li>escalating droughts have dried up land and have decreased water quality and supply</li>
                <li>melting glaciers have caused the sea level to rise</li>
                <li>and dangerous storms have destroyed millions of acres of property and ecosystems</li>
            </ul>
            <p>These are only a few examples of the devastating environmental damage caused by fossil fuels and climate change.</p>
            <div class="cta">
                <a href="/greenhome/energysources">
                    <button>View Energy Types</button>
                </a>
            </div>
            <h2>What are the Benefits of Green Energy?</h2>
            <p>Installing renewable or green energy systems in homes can: </p>
            <ul>
                <li>Conserve energy</li>
                <li>Reduce the expense of home utilities</li>
                <li>Assist in paying off taxes</li>
            </ul>
            <p>Additionally, using renewable forms of energy helps combat climate change. These systems reduce pollution by minimizing reliance on fossil fuels and further preventing the atmosphere’s exposure to greenhouse gas emissions.</p>
            <div class="cta">
                <a href="/greenhome/financialbonuses">
                    <button>View Financial Bonuses</button>
                </a>
            </div>
        </section>
        <div class="spacer"></div>
        <div id="notice">* This website was created with the Svelte framework and Motion One library.</div>
    </article>
</main>
<style lang="scss">
	main {
		background-image: url('/greenhome/images/smallHouse.jpg');
		height: auto;
		min-height: 100dvh;
		background-size: cover;
		background-position: center;
		color: white;
		display: flex;
		gap: 1em;
		flex-direction: column;
		align-items: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
	}
    .title-container {
        height: 100dvh;
        display: grid;
        place-items: center;
    }
    section{
        padding: 1em;
        margin:auto;
        width: fit-content;
    }
    article {
        width: 100%;
        padding-bottom: 10em;
    }
    section div{
        font-size:2.4rem;
        margin-top:1.3rem;
        margin-bottom:1.05rem;
    }
    h1.main-title {
        font-size: min(13rem, 20dvw);
        font-weight: 600;
        text-shadow: 0 0 .2em rgba(0,0,0,0.43);
        text-align: center;
        margin-top: 0;
        margin-bottom: 1rem;
        // border-bottom: 3px solid #79FF8F;
    }
    .cta {
        padding: 1em 0 1em 0;
        display: grid;
        place-items: center;
    }
    .big-title {
        position: fixed;
        inset: 0;
        height: 100vh;
        pointer-events: none;
        h1 {
            text-align: center;
            font-size: min(25rem, 30dvw);
            font-weight: 600;
            margin: 0;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.025) 50%, rgba(255, 255, 255, .1) 100%);
            line-height: 1;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-user-select: none;
            user-select: none;
        }
        mix-blend-mode: overlay;
    }
    h2 {
        font-size: 2rem;
        font-weight: normal;
    }
    p {
        max-width: 75ch;
        text-align: justify;
    }
    ul {
        list-style: circle;
    }
    button{
        color:white;
        outline: 3px solid #79FF8F;
        font-size:20px;
        border-radius: 20px;
        border:none;
        background-color:rgba(255,255,255,0.25);
        padding: 15px 30px;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        box-shadow: 0 0 10px raba(0 0 0 50%);
        outline-offset:0;
        transition: none .5s cubic-bezier(0, 0, 0, 1);
        transition-property:outline-offset, scale;
    }
    button:hover{
        outline: 3px solid #79FF8F;
        outline-offset:5px;
        cursor:pointer;
    }
    button:active {
        scale: 0.9;
        outline-offset: 10px;
    }
    a{
        display: flex;
        justify-content: center;
        text-decoration:none;
    }
    .spacer {
        flex-grow: 1;
    }
    #notice{
        position:relative;
        bottom:0;
        padding: 0 0 .5rem .5rem;
        align-self: flex-start;
        text-shadow: 0px 2px 4px black;
        opacity: .5;
    }

    
</style>