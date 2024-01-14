<main>
    <h1>References</h1>
    <div class="links">
        <a href='https://drive.google.com/file/d/1KU-nE0jrawxqkuOXUnwKEZezH2jyuHgx/view' target="_blank">Plan of Work Log</a>
        <a href='https://drive.google.com/file/d/1-m8tkB0U65hEbZnbovEJEqNcnfsWBTd2/view' target="_blank">Works Cited</a>
        <a href="">Copyright Checklist</a>
    </div>
</main>

<style>
    a{
        color:white;
        text-decoration:none;
        display: grid;
        place-items: center;
        /* background-color: #005500; */
        padding-bottom: 2px;
        background-size: 50%;
        border-bottom: 1px solid #ffffff;
        transition: none .5s cubic-bezier(0, 0, 0, 1);
        transition-property: border, padding;
    }

    h1 {
        color: white;
    }

    a:hover{
        border-bottom: 1px solid white;
        padding-bottom: .8em;
    }

    a:active {
        padding-bottom: .4em;
    }

    .links {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3em;
    }

    main {
        height: 100dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3em;
        flex-direction: column;
        background-image: url("/greenhome/images/leaves.jpg");
    }

    @media screen and (max-width: 700px) {
        .links {
            flex-direction: column;
        }
    }
</style>