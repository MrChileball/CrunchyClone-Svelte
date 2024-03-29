<script>
    import { onMount } from "svelte";

    onMount(() =>{
        console.log("SEXO");
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