import { fetchBasicAnimeData, fetchPaginatedAnimeData } from "../lib/scripts/utils/fetch.js";

export const load = async ({ setHeaders, url }) => {
	/*const popularAnime = await fetchBasicAnimeData("POPULARITY_DESC");
	const topRatedAnime = await fetchPaginatedAnimeData("SCORE_DESC", 1);
	const trendingAnime = await fetchPaginatedAnimeData("TRENDING_DESC", 1);
	const favouriteAnime = await fetchPaginatedAnimeData("FAVOURITES_DESC", 1);*/

	setHeaders({
		"cache-control": "public, max-age=172800, stale-while-revalidate=86400"
	});
	return {
		url: url.pathname,
	  }

	/*return {
		popularAnime,
		trendingAnime,
		topRatedAnime,
		favouriteAnime
	};*/
};
