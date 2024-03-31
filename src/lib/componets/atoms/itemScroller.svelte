<script>


    import ContentScroll from "../scrollers/contentScroll.svelte";
    export let img = "https://picsum.photos/id/23/300/300";

</script>

<li class="carousel__item"> 
    <a href="/">
        <img class="carousel__item__image" src="{img}" loading="lazy" alt=""/>
        <div class="carousel__description">
            <h3 class="carousel__title"><slot>Proximamente...</slot></h3>
            <span class="carousel__subtitle">sub | english</span>
        </div>
    </a>
</li>


<style>
    .carousel .carousel__item .carousel__description {
  width: 100%;
}
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
}
.carousel__item{
  max-width: 240px;
  
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