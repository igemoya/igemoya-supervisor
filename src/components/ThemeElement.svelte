<script lang="ts">
  import { Link } from "svelte-routing";

  export let title: string;
  export let imageUrl: string;
  export let id: string;

  const clicked = () => {
    localStorage.setItem("theme", id);
  };
</script>

<Link to="/supervisor/theme" on:click={clicked} style="text-decoration: none">
  <div style="background-image: url({imageUrl})" id="backgroundContainer">
    <div id="innerContainer">
      <span class="w700">{title}</span>
    </div>
  </div>
</Link>

<style>
  #backgroundContainer {
    background-position: center;
    background-size: cover;
    margin-top: 2vh;
    margin-left: 0.6vw;
    margin-right: 0.6vw;
    border-radius: 1vh;
    width: 29vw;
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