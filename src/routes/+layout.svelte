
<script>
// @ts-nocheck

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
    export let data;


</script>


{#key data.url}

    <div 
    in:fly="{{ y: -50, duration: 250, delay: 300 }}"
    out:fly="{{ y: -50, duration: 250 }}" 
    >
        <Navbar></Navbar>
        <div class="base">
            <slot></slot>
        </div>
    </div>

{/key}


<style>
    .base{
        padding: 24px;
    }
</style>
<Footer></Footer>


