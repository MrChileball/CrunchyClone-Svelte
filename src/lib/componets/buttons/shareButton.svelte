
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<script>
    import { onMount } from "svelte";
    let url = "";
    export let text = "Compartir este enlace";

    onMount(() => url = window.location.href);

    const isAndroid = () => /Android/i.test(navigator.userAgent);
        // Función para detectar si el dispositivo es iOS
    const isIOS = () => /iPhone|iPad|iPod/i.test(navigator.userAgent);
    $: clicked = false;
    $: console.log(clicked);
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    const clickEvent = () => {
  
        // @ts-ignore
        if (isAndroid || isIOS) {
            ShareMenuMobile();
        } else {
            ShareNotificationDesktop();
            ShareMenuMobile();
        }

    }
    const ShareMenuMobile = async () => {
        try {
            await navigator.share({
                title: document.title,
                text,
                url
            });
            console.log('Enlace compartido exitosamente');
        } catch (error) {
            console.error(error);
        }
    };
    // Función para mostrar u ocultar el menú de compartir
    const ShareNotificationDesktop = () => {
        copyURL();
        showNotification('URL copiada al portapapeles');
    };

    const showNotification = (message) => {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        // Establecer estilos CSS para la notificación
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.padding = '10px';
        notification.style.backgroundColor = '#333';
        notification.style.color = '#fff';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
        notification.style.zIndex = '9999';
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-100%)';
        notification.style.transition = 'opacity 0.3s, transform 0.3s';

        document.body.appendChild(notification);

        // Forzar el cálculo de las propiedades de estilo antes de aplicar la animación
        notification.getBoundingClientRect();

        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';

        setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
        }, 2000);
    };
    // Función para copiar la URL actual al portapapeles
    const copyURL = async () => {
        try {
        await navigator.clipboard.writeText(url);
        } catch (error) {
        console.error('Error al copiar el enlace: ', error);
        }
    };
    
</script>
<slot>
    <a aria-label="share button" id="share-link-button" on:click={() => {clickEvent()}}>
        <svg id="icon-share" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M8.7 10.7l6.6 -3.4"></path>
            <path d="M8.7 13.3l6.6 3.4"></path>
         </svg>
        
    </a>
</slot>