<script>
    import ShareButton from "../buttons/shareButton.svelte";
import IconLogo from "../icons/iconLogo.svelte";

</script>

<nav class="nav-container">
    <div class="left-icons">
      <a href="/">
        <IconLogo></IconLogo>
        
      </a>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-dot" width="100%" height="100%" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5"></path>
            <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2c.641 0 1.212 .302 1.578 .771"></path>
        </svg>
      </a>
      <a href="/">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-compass" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 16l2 -6l6 -2l-2 6l-6 2"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 3l0 2"></path>
            <path d="M12 19l0 2"></path>
            <path d="M3 12l2 0"></path>
            <path d="M19 12l2 0"></path>
         </svg>
      </a>
    </div>

    <div class="right-icons">
      <!-- svelte-ignore a11y-missing-attribute -->
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-news" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
          <path d="M8 8l4 0"></path>
          <path d="M8 12l4 0"></path>
          <path d="M8 16l4 0"></path>
        </svg>
      </a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855">
            </path>
        </svg>
      </a>
      <!-- svelte-ignore a11y-invalid-attribute -->
      <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-paypal" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4"></path>
         </svg>
      </a>
    </div>
  </nav>


<style>
  .nav-container{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    min-height: clamp(32px, 2rem + 2vw, 3rem);
    padding: 8px;
    z-index: 100;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 3px 40px;
    background-color: var(--custom-rich-black);
    display: flex;
    height: 100%;
  }


</style>