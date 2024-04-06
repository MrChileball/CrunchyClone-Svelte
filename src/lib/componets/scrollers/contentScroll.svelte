<script>
    import { onMount } from "svelte";

    onMount(() =>{
            const COMPONENT_SELECTOR = '.carousel__wrapper';
            const CONTROLS_SELECTOR = '.carousel__controls';
            const CONTENT_SELECTOR = '.carousel__content';

            const components = document.querySelectorAll(COMPONENT_SELECTOR);

            for (let i = 0; i < components.length; i++) {
                const component = components[i];
                const content = component.querySelector(CONTENT_SELECTOR);

                if (!content) {
                    console.error('No se encontró el contenido del carrusel');
                    continue;
                }

                const nextButton = component.querySelector('.arrow-next');
                const prevButton = component.querySelector('.arrow-prev');

                if (!nextButton || !prevButton) {
                    console.error('No se encontraron los botones de desplazamiento');
                    continue;
                }

                nextButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    content.scrollTo({
                        left: content.scrollLeft + content.clientWidth,
                        behavior: 'smooth'
                    });
                });

                prevButton.addEventListener('click', function (event) {
                    event.preventDefault();
                    content.scrollTo({
                        left: content.scrollLeft - content.clientWidth,
                        behavior: 'smooth'
                    });
                });
                            // Añadir desplazamiento con el mouse
            let isDown = false;
            let startX;
            let scrollLeft;

            content.addEventListener('mousedown', (e) => {
                isDown = true;
                startX = e.pageX - content.offsetLeft;
                scrollLeft = content.scrollLeft;
            });

            content.addEventListener('mouseleave', () => {
                isDown = false;
            });

            content.addEventListener('mouseup', () => {
                isDown = false;
            });

            content.addEventListener('mousemove', (e) => {
                if(!isDown) return;
                e.preventDefault();
                const x = e.pageX - content.offsetLeft;
                const walk = (x - startX) * 3; //scroll-fast
                content.scrollLeft = scrollLeft - walk;
            });
            }
    });
</script>

<div class="container">
    <div class="carousel">
      <div class="carousel__wrapper">
        <div class="carousel__header">
          <h2 class="carousel__headline"> 
            <slot name="title">Series Destacadas </slot>
          </h2>
          <div class="carousel__controls">
            <button class="carousel__arrow disabled arrow-prev"></button>
            <button class="carousel__arrow arrow-next"></button>
          </div>
        </div>
        <ul class="carousel__content">
          <slot></slot>
        </ul>
      </div>
  </div>
</div>