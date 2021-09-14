<script lang="ts">
  import { Link } from "svelte-routing";

  export let title: string;
  export let imageUrl: string;
  export let id: string;
  export let isThird: boolean;

  const clicked = () => {
    localStorage.setItem("exhibition", id);
  };
</script>

<Link to="/supervisor/exhibition" on:click={clicked} style="text-decoration: none">
  {#if isThird}
    <div style="background-image: url({imageUrl}); margin-right: 0;" class="exhibitionContainer">
      <div id="innerContainer">
        <span class="w700">{title}</span>
      </div>
    </div>
  {:else}
    <div style="background-image: url({imageUrl});" class="exhibitionContainer">
      <div id="innerContainer">
        <span class="w700">{title}</span>
      </div>
    </div>
  {/if}
</Link>

<style>
  .exhibitionContainer {
    background-position: center;
    background-size: cover;
    margin-top: 2vh;
    margin-right: 1vw;
    border-radius: 1vh;
    width: 30vw;
    height: 10vw;
  }

  #innerContainer {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vh;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.8) blur(8px);
    -webkit-backdrop-filter: brightness(0.8) blur(8px);
    border-radius: 1vh;
  }
</style>