<script>
</script>
<main>
    <div class="heading">About</div>
    <section>
        <div>What is Green Energy?</div>
        <p>Green energy, also known as renewable energy, is energy from resources that are naturally replenished on a human timescale. Renewable energy includes solar power, wind power, water power, and geothermal energy. </p>
        <div>Why Green Energy?</div>
        <p>Installing renewable or green energy systems in homes can conserve energy, reduce the expense of utilities, and can assist in paying off taxes. Additionally, renewable energy will contribute to little or no pollution in the environment, keeping the Earth clean and preventing the worldwide issue of climate change.</p>
    </section>
    <a>
        <button>View Energy Types</button>
    </a>
    <div class="spacer"></div>
    <div id="notice">*This website was created with the Svelte framework.</div>
</main>
<style>
    main{
        background-image: url("images/about.jpg");
        height:auto;
        min-height:100dvh;
        background-size: cover;
        background-position: center;
        color:white;
        display: flex;
        gap: 1em;
        flex-direction: column;
        align-items: center;
    }
    section{
        padding: 1em;
        margin:auto;
        max-width:140ch;
        text-shadow: 0px 2px 4px black;
    }
    section div{
        font-size:2.4rem;
        margin-top:1.3rem;
        margin-bottom:1.05rem;
    }
    section p{
        font-size:1.6rem;
    }
    button{
        color:white;
        border: 3px solid #79FF8F;
        font-size:20px;
        border-radius: 20px;
        background-color:rgba(255,255,255,0.25);
        padding: 15px 30px;
        backdrop-filter: blur(5px);
        box-shadow: 0 0 10px raba(0 0 0 50%);
    }
    a{
        display: flex;
        justify-content: center;
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
    }
    @media screen and (max-width:500px){}
</style>