<script>
// @ts-nocheck

	import ItemScroller from '$lib/componets/atoms/itemScroller.svelte';
    // @ts-ignore
    import ShareButton from "$lib/componets/buttons/shareButton.svelte";
import { fetchSearchResults } from '$lib/scripts/utils/fetch';

    import Carousel from "$lib/componets/scrollers/contentScroll.svelte";
    import TrendingSerie from '$lib/componets/categories/trendingSerie.svelte';


   let query = "";

   $: console.log(query);

   let searchResults =[];

   

    const searchQuery = async () =>{
      const res = await fetchSearchResults(query);
      console.log(res);

      searchResults = res;

    }
    function handleKeyPress(event) {
    if (event.key == 'Enter') {
      searchQuery();
    }
  }
    $: {
    //ejecuta la función al arrancar la página
        searchQuery();
    }
  
</script>

    
    <div id="main" >
      
      <h1>
        新大久保へようこそ
      </h1>
    </div>

    

    

    <input bind:value={query} on:click={() => { searchQuery() }} on:keydown={handleKeyPress }  type="text">
    <Carousel title="Busqueda">
      <div slot="title">Busqueda</div>
      {#each searchResults as results, i (i) }
        <ItemScroller img="{results.coverImage.large}" ep="{results.episodes}" score="{results.meanScore}">
          {results.title.english}
        </ItemScroller>
      {/each}
    </Carousel>

              
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

      

    
        
        
  
  
  
          
  
  
        
