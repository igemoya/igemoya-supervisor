<svelte:head>
  <link rel="stylesheet" href="/css/supervisor.css">
</svelte:head>

<script lang="ts">
  import Navbar from "../../components/Navbar.svelte";
  import ViewRank from "../../components/ViewRank.svelte";
  import ThemeRank from "../../components/ThemeRank.svelte";
  let previousMenu = "";
  let previousUrl = "";
  let userName = "coupydev";
  let viewRanks = [
    {"exhibition": "경복궁", "item": "광화문", "object": "현판", "view": 382},
    {"exhibition": "경복궁", "item": "광화문", "object": "용마루", "view": 316},
    {"exhibition": "경복궁", "item": "흥례문", "object": "현판", "view": 283},
    {"exhibition": "경복궁", "item": "광화문", "object": "처마", "view": 237},
    {"exhibition": "경복궁", "item": "사정전", "object": "현판", "view": 184},
    {"exhibition": "경복궁", "item": "홍살문", "object": "홍살문", "view": 37},
  ];
  let themeRanks = [
    {"theme": "경복궁 깊게 들여다보기", "view": 351},
    {"theme": "현판의 비밀", "view": 173},
    {"theme": "숨겨진 보물, 경기전", "view": 31},
  ];
</script>

<main>
  <Navbar {previousMenu} {previousUrl} {userName} />
  <div id="topContainer">
    <div class="topContainerSpliter">
      <div id="topContainerTitleRow">
        <span class="containerTitle">실시간 조회 현황</span>
        <small>실시간 현황은 오늘 하루동안의 누적 조회수를 기준으로 합니다.</small>
      </div>
      <div class="topContainerRanking">
        <div class="topContainerRankingCategory">
          <span>대상</span>
          <span>조회수</span>
        </div>
        {#each viewRanks as rank}
          <ViewRank exhibition={rank.exhibition} item={rank.item} object={rank.object} view={rank.view} />
        {/each}
      </div>
    </div>
    <div class="topContainerSpliter">
      <span class="containerTitle">테마 열람 현황</span>
      <div class="topContainerRanking">
        <div class="topContainerRankingCategory">
          <span>대상</span>
          <span>조회수</span>
        </div>
        {#each themeRanks as rank}
          <ThemeRank theme={rank.theme} view={rank.view} />
        {/each}
      </div>
    </div>
  </div>
</main>
