<svelte:head>
  <link rel="stylesheet" href="/css/navbar.css">
</svelte:head>

<script lang="ts">
  import { Link } from "svelte-routing";

  export let previousMenu: string;
  export let previousUrl: string;
  export let userName: string;

  const openProfile = () => {
    const expandIcon = document.getElementById("expandArrow");
    const floating = document.getElementById("floating");
    const isClosed = expandIcon.classList.contains("closed");
    if(isClosed) {
      expandIcon.classList.remove("closed");
      floating.classList.remove("closed");
    } else {
      expandIcon.classList.add("closed");
      floating.classList.add("closed");
    }
  };
</script>

<div id="main">
  <div id="left" class="spliter">
    {#if previousUrl}
      <a href={previousUrl}>
        <img src="icons/back_arrow.svg" id="leftArrow" alt="<">&nbsp;{previousMenu}
      </a>
    {/if}
  </div>
  <div id="center" class="spliter">
    <img src="/images/igemoya.svg" alt="Logo" id="logo">
    <span id="logoText"><span class="w900">이게모야</span>&nbsp;관리자</span>
  </div>
  <div id="right" class="spliter">
    <span class="clickable" on:click={openProfile}>
      {userName}&nbsp;<img src="icons/expand_arrow.svg" id="expandArrow" class="closed" alt="v">
    </span>
  </div>
</div>
<div id="floating" class="closed">
  <Link to="/">로그아웃</Link>
</div>