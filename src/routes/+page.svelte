<script lang="ts">
	import FancyBackground from "./FancyBackground.svelte";

</script>
<FancyBackground/>

<main>
    <h1>Power Your Home Through Sustainable Energy</h1>
    
    <a href="about">
        <button>Learn More</button>
    </a>
</main>


<style>
    a{
        text-decoration:none;
        margin-top:50px;
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
        box-shadow: 0 0 10px raba(0 0 0 50%);
        border:none;
        cursor: pointer;
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
    }
    h1{
        text-shadow: 0 0 10px raba(0 0 0 50%);
        font-size:50px;
        text-align:center;
        margin-top:42vh;
        color:white;
        font-family: 'Inter', sans-serif;
    }
</style>