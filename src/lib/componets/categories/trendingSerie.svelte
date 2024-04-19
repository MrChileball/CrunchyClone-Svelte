<script>
	import Carousel from '$lib/componets/scrollers/contentScroll.svelte';
    import { fetchPaginatedAnimeData } from '$lib/scripts/utils/fetch';
    import ItemScroller from '../atoms/itemScroller.svelte';
    

	
  export let trendingAnime = [];
	  export let trendingAnimePageNo = 1;
  
    const loadPopularAnime = async () => {


      const res = await fetchPaginatedAnimeData("POPULARITY_DESC", trendingAnimePageNo);
      console.log(res);

      // @ts-ignore
      trendingAnime = [...trendingAnime, ...res];
      console.log(trendingAnime);
	};
    
    $: {
    //ejecuta la función al arrancar la página
        loadPopularAnime();
    }

    // Función para actualizar trendingAnimePageNo y recargar los datos
    const nextPage = async () => {
        trendingAnimePageNo++;
        console.log(trendingAnimePageNo);
        loadPopularAnime();
    };

 // @ts-ignore
   $: console.log(trendingAnime);
</script>

<Carousel>

    
    <div slot="title">QUEPA SOPA DRINO</div> 
    {#each trendingAnime as anime, i (i) }
    <ItemScroller img="{anime.coverImage.large}" ep="{anime.episodes}" score="{anime.meanScore}">
      {anime.title.english}
    </ItemScroller>
    {/each}
    <button on:click={() => {nextPage()}}></button>


    
    
  </Carousel>