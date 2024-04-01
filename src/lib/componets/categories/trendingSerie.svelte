<script>
	import Carousel from '$lib/componets/scrollers/contentScroll.svelte';
    import { fetchPaginatedAnimeData } from '$lib/scripts/utils/fetch';
    import ItemScroller from '../atoms/itemScroller.svelte';
    
    export let trendingAnime =[];
	export let trendingAnimePageNo = 1;

	


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


    
    
  </Carousel>