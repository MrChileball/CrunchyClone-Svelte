<script>


    import ContentScroll from "../scrollers/contentScroll.svelte";
    export let img = "https://picsum.photos/id/23/300/300";
    export let score;
    export let ep;

</script>

<li class="carousel__item"> 
    <a href="/">
        <img class="carousel__item__image" src="{img}" loading="lazy" alt=""/>
        <div class="carousel__description">
            <h3 class="carousel__title"><slot>Proximamente...</slot></h3>
            <span class="carousel__subtitle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M11 15h1" />
                <path d="M12 15v3" />
              </svg>{ep} | <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
              </svg>{score}</span>
        </div>
    </a>
</li>


<style>
.carousel .carousel__item a {
  display: flex;
  justify-content: center;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  user-select: none;
  margin: 10px 0px;
  padding: 16px;

  border-radius: clamp(0px, ((100vw - 4px) - 100%) * 9999, 8px);
  cursor: pointer;
  justify-content: start;
}
.carousel__item{
  max-width: 240px;
  max-height: 375px;

}
.carousel .carousel__item a:hover {
  background: var(--custom-rich-black);
  transition: all 0.2s ease-in;
}
.carousel__title {
  font-size: 16px;
  margin: 0;
  margin-bottom: 4px;
  font-weight:700;
  color: var(--custom-white-200);
}
.carousel__subtitle{
    color: var(--custom-white-300);
}
</style>