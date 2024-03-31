<script lang="ts">
	import ItemScroller from './../lib/componets/atoms/itemScroller.svelte';
    // @ts-ignore
    import ShareButton from "$lib/componets/buttons/shareButton.svelte";
import Navbar from "$lib/componets/navbar/navbar.svelte";
import { fetchPaginatedAnimeData } from '$lib/scripts/utils/fetch';

    import Carousel from "$lib/componets/scrollers/contentScroll.svelte";
   

    export let data;
	let { popularAnime, trendingAnime, topRatedAnime, favouriteAnime } = data;
    

  // @ts-ignore
	let trendingAnimePageNo = 1;

	const loadPopularAnime = async () => {
		trendingAnimePageNo++;

		const res = await fetchPaginatedAnimeData("POPULARITY_DESC", trendingAnimePageNo);
		// @ts-ignore
		trendingAnime = trendingAnime.concat(res);
	};
loadPopularAnime();


 // @ts-ignore
   $: console.log(trendingAnime);

  


</script>




    <Navbar></Navbar>
    <div id="main" >
      
      <h1>
        新大久保へようこそ
      </h1>
    </div>

    <Carousel>
      <div slot="title">QUEPA SOPA DRINO</div> 
      {#each trendingAnime as anime, i (i) }
      <ItemScroller img="{anime.coverImage.large}">
        {anime.title.english}
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

      

    
        
        
  
  
  
          
  
  
        
