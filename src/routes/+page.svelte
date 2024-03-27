<script>
    import Navbar from "$lib/componets/navbar/navbar.svelte";
    import "$lib/scripts/carousel.js";
    import "$lib/scripts/clipboard.js";
  


</script>




    <Navbar></Navbar>
    <div id="main" >
      
      <h1>
        新大久保へようこそ
      </h1>
    </div>
    <a aria-label="share button" id="share-link-button">
      <svg id="icon-share" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M8.7 10.7l6.6 -3.4"></path>
          <path d="M8.7 13.3l6.6 3.4"></path>
       </svg>
      
  </a>
              
    <!--<section class="key-art">
      <div class="main-background">
      </div>  
      <div class="main-content ">
        <picture>
          <source srcset="" type="image/webp">
          <img class="banner-desktop image-container" src="/series/snk/content/banner-desktop.webp" width="640" height="360" alt="Fondo de la serie">
        </picture>
        <picture>
          <source srcset="" type="image/webp">
          <img class="banner-mobile image-container" src="/series/snk/content/banner-mobile.webp" width="640" height="360" alt="Fondo de la serie">
        </picture>
      </div>
      <h1>Nueva Serie</h1>-->

      

    <div class="container">
      <div class="carousel">
        <div class="carousel__wrapper">
          <div class="carousel__header">
            <h2 class="carousel__headline">Series Destacadas 
            </h2>
            <div class="carousel__controls">
              <button class="carousel__arrow disabled arrow-prev"></button>
              <button class="carousel__arrow arrow-next"></button>
            </div>
          </div>
          <ul class="carousel__content">
            <li class="carousel__item"> <a href="https://shingekionline.netlify.app/series/snk/"><img class="carousel__item__image" src="/images/image (1).webp" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h2 class="carousel__title">Attack on titan
                  <!--</h3><span class="carousel__subtitle"></span>-->
                </div></a></li>
            <li class="carousel__item"> <a href="https://shingekionline.netlify.app/series/vinland/"><img class="carousel__item__image" src="/series/vinland/content/banner-mobile.webp" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h2 class="carousel__title">Vinland Saga
                    <!--</h3><span class="carousel__subtitle"></span>-->
                </div></a></li>
            <!-- svelte-ignore a11y-invalid-attribute -->
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/23/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  3
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/24/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  4
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/25/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  5
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/26/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  6
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/27/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  7
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/28/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  8
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/29/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  9
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/210/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  10
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/211/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  11
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/212/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  12
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/213/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  13
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/214/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  14
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/215/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  15
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/216/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  16
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/217/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  17
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/218/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  18
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/219/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  19
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
            <li class="carousel__item"> <a href="#"><img class="carousel__item__image" src="https://picsum.photos/id/220/300/300" loading="lazy" alt=""/>
                <div class="carousel__description">
                  <h3 class="carousel__title">Proximamente..  20
                  </h3><span class="carousel__subtitle">.....</span>
                </div></a></li>
          </ul>
        </div>
    </div>
</div>
        
        
  
  
  
          
  
  
        
