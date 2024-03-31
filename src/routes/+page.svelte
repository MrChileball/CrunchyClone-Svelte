<script lang="ts">
	import ItemScroller from './../lib/componets/atoms/itemScroller.svelte';
    // @ts-ignore
    import ShareButton from "$lib/componets/buttons/shareButton.svelte";
import Navbar from "$lib/componets/navbar/navbar.svelte";
import { fetchPaginatedAnimeData } from '$lib/scripts/utils/fetch';

    import Carousel from "$lib/componets/scrollers/contentScroll.svelte";
    import TrendingSerie from '$lib/componets/categories/trendingSerie.svelte';
   

    export let data;
	let { trendingAnime } = data;
    

 

  


</script>




    <Navbar></Navbar>
    <div id="main" >
      
      <h1>
        新大久保へようこそ
      </h1>
    </div>

    <TrendingSerie {trendingAnime}></TrendingSerie>

              
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

      

    
        
        
  
  
  
          
  
  
        
