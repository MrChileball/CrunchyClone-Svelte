<script>
	import Carousel from '$lib/componets/scrollers/contentScroll.svelte';
    import { fetchPaginatedAnimeData } from '$lib/scripts/utils/fetch';
    import ItemScroller from '../atoms/itemScroller.svelte';
    
    export let trendingAnime;
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

<Carousel>
    <div slot="title">QUEPA SOPA DRINO</div> 
    {#each trendingAnime as anime, i (i) }
    <ItemScroller img="{anime.coverImage.large}" ep="{anime.episodes}" score="{anime.meanScore}">
      {anime.title.english}
    </ItemScroller>
    {/each}


    
    
  </Carousel>