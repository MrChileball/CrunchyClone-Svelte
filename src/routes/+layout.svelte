
<script>
// @ts-nocheck
    export let data;
    import { onMount } from "svelte";
    import "../styles/app.css";
    import Navbar from "$lib/componets/sections/navbar.svelte";
    import Footer from "$lib/componets/sections/footer.svelte";
    import { fly } from 'svelte/transition'
    // @ts-nocheck


    /*onMount(async () => {
    // Llamar a la función cuando el DOM esté listo

        setTimeout(() => {
        const styleBody = document.body; //Seleciona el elemento Body de CSS
        styleBody.classList.add("fade-in-nonlinear"); //añade la clase fade-in-nonlinear al body
        styleBody.style.visibility = "visible"; //vuelve visible la web y empieza la transición de carga   
        }, "150");


    });
    */
    


</script>




    
        <Navbar></Navbar>
{#key data.url}

        <div class="base" in:fly={{ x: -200, duration: 300, delay: 300}}
        out:fly={{ duration: 300}} >
            <slot></slot>
        </div>


{/key}


<style>
    .base{
        padding: 24px;
    }
</style>
<Footer></Footer>


