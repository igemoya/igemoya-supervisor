<svelte:head>
  <link rel="stylesheet" href="/css/supervisor.css">
</svelte:head>

<script lang="ts">
  import { navigate } from "svelte-routing";

  import Navbar from "../../components/Navbar.svelte";
  import ViewRank from "../../components/ViewRank.svelte";
  import ThemeRank from "../../components/ThemeRank.svelte";
  import ThemeElement from "../../components/ThemeElement.svelte";
  import ExhibitionElement from "../../components/ExhibitionElement.svelte";
  import axios from "axios";

  let previousMenu = "";
  let previousUrl = "";
  let userName = "";
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
  let exhibitions = [
    {"id": "1", "exhibition": "경복궁", "image": "https://i1.wp.com/www.agoda.com/wp-content/uploads/2019/05/Gyeongbokgung-palace-Seoul-Gwanghwamun-Gate.jpg"},
    {"id": "2", "exhibition": "경기전", "image": "https://t1.daumcdn.net/cfile/tistory/24434E3F5624A3FE10"},
  ];
  let themes = [
    {"id": "1", "theme": "경복궁 깊게 들여다보기", "image": "http://www.artinsight.co.kr/data/tmp/1804/79026ca47a77c48e37c1afb425b80566_RtxaVP4jOakhYzo6m2edDPv.jpg"},
    {"id": "2", "theme": "숨겨진 보물, 경기전", "image": "https://www.jeonju.go.kr/images/munhwa/sub/03010102_img02.jpg"},
    {"id": "3", "theme": "현판의 비밀", "image": "https://img.hani.co.kr/imgdb/resize/2018/1227/00503307_20181227.JPG"},
  ];

  axios.get('https://igemoya-backend.herokuapp.com/user/me', {
    headers: {
      authorization: `Bearer ${localStorage.jwt}`
    }
  }).then((res) => {
    userName = res.data.username;
  }).catch(() => {
    navigate('/oauth/logout', { replace: true });
  });
</script>

<main>
  <Navbar {previousMenu} {previousUrl} {userName} />
  <div id="topContainer" class="containers">
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
  <div class="containers bottomContainers">
    <span class="containerTitle">전시 목록</span>
    <div class="wrapContainer">
      {#each exhibitions as element, i}
        <ExhibitionElement title={element.exhibition} imageUrl={element.image} id={element.id} isThird={(i + 1) % 3 == 0} />
      {/each}
      <div class="addContainer clickable">
        <span class="addText w700">
          새 전시 추가 +
        </span>
      </div>
    </div>
  </div>
  <div class="containers bottomContainers">
    <span class="containerTitle">테마 목록</span>
    <div class="wrapContainer">
      {#each themes as element, i}
        <ThemeElement title={element.theme} imageUrl={element.image} id={element.id} isThird={(i + 1) % 3 == 0} />
      {/each}
      <div class="addContainer clickable">
        <span class="addText w700">
          새 테마 추가 +
        </span>
      </div>
    </div>
  </div>
</main>
