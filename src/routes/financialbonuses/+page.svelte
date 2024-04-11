<script lang="ts">
    import { animate, scroll } from "motion";
    import {onMount} from "svelte";
    let article: HTMLElement;
    let title: HTMLHeadingElement;
    let bigTitle: HTMLHeadingElement;
    
    onMount(()=>{
        scroll(animate(article, {
            backgroundColor: ["rgb(0, 0, 0, 0.25)", "rgb(0, 0, 0, 0.6)", "rgb(0, 0, 0, 0.6)"],
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
    });
</script>

<svelte:head>
    <title>Financial Bonuses</title>
</svelte:head>

<main>
    <div class="big-title">
        <h1 bind:this={bigTitle}>Financial Bonuses</h1>
    </div>
    <article bind:this={article}>
        <div class="title-container" bind:this={title}>
            <h1 class="main-title">Financial Bonuses</h1>
            <p>Scroll to Read</p>
        </div>
        <section>
            <p class="large">
                On top of the benefits homeonwers gain from producing their own electricity, they can recieve incentives like credits that can be redeemed to discount taxes or recieve money.
                Since homeowners can produce energy that is clean and in excess, there are many financial bonuses available to encourage the use of green energy systems to produce extra electricity.
            </p>
            <h2>IRS Tax Credit</h2>
            <p>
                The IRS offers a 30% tax credit for installing these systems, which can be used to offset the costs of installing these systems. You are required to fill out an
                IRS form in order to claim this tax credit, but the government offers it to everyone who installs these systems.
            </p>
            <h2>Net Metering</h2>
            <p>
                States in the US (excluding Alabama, South Dakota, and Tennessee) have a policies called net-metering in which homeowners receive compensation for sending any excess electricity that they generate to the grid.
                During the day, most customers of home energy systems produce more energy than they consume. Net metering can take advantage of this excess to minimize their
                electricity bills while simultaneously powering the grid and providing energy for other homes. The forms of compensation can vary between states. For example, Idaho and Texas only offer net metering through 
                utility companies (not the government). Additionally, Arizona, California, and Utah only offer net billing in which energy is sold at whole sale value (providing less money on returns compared to net metering).
            </p>
            <p>
                Not only do homeowners get to sell excess energy through net metering,
                they can redeem it in the future if their home energy systems do not generate enough. For example, a homeowner that generates excess energy in October can sell it and
                receive a credit, which they can redeem in November if they don’t generate enough energy and need to take more from the grid. The credit they use pays for the supplemental
                energy they need from the grid.
            </p>
            <h2>State-Specific Tax Credit</h2>
            <p>
                In addition to the federal tax credit offered by the IRS, many states also offer a state tax credit (like South Carolina’s additional 25%).
                Homeowners can also benefit from performance based incentives, or PBIs, such as solar renewable energy certificates, where owners can earnable a
                tradable certificate/credit, which can be sold for money. Utility companies then buy these tax credits to meet renewable energy mandates. These
                credits are only available in a few states.
            </p>
        </section>
    </article>
</main>

<style lang="scss">
    main {
		background-image: url('/greenhome/images/money.jpg');
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
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        p {
            padding: 1em 1.5em;
            background-color: rgb(0,0,0,.4);
            border-radius: 20px;
        }
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
        font-size: min(7rem, 15dvw);
        font-weight: 600;
        text-shadow: 0 0 .2em rgba(0,0,0,0.43);
        text-align: center;
        margin-top: 0;
        margin-bottom: 1rem;
        // border-bottom: 3px solid #79FF8F;
    }
    .cta {
        padding: 3em 0;
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
            font-size: min(13rem, 20dvw);
            font-weight: 600;
            margin: 0;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, .2) 100%);
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
    p.large {
        font-size: 1.2em;
        font-style: italic;
        max-width: 65ch;
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