
<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import "../styles/app.css";
    // @ts-nocheck


    onMount(async () => {
    // Llamar a la función cuando el DOM esté listo

        setTimeout(() => {
        const styleBody = document.body; //Seleciona el elemento Body de CSS
        styleBody.classList.add("fade-in-nonlinear"); //añade la clase fade-in-nonlinear al body
        styleBody.style.visibility = "visible"; //vuelve visible la web y empieza la transición de carga   
        }, "150");


    });


</script>



<slot>

</slot>


