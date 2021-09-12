<svelte:head>
  <link rel="stylesheet" href="/css/index.css">
</svelte:head>

<script lang="ts">
  import "../@type/index.d.ts";
  
  Kakao.init("f246de8d71e0c8320cb967a7361ae9fe");

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'https://igemoya-supervisor.herokuapp.com/oauth'
    });
  };
</script>

<main>
  <img src="/images/igemoya.svg" alt="igemoya" id="logo">
  <span id="logoText"><span class="w900">이게모야</span>&nbsp;관리자</span>
  <a id="kakaoButton" on:click={loginWithKakao}>
    <img src="/images/kakao_login.png" id="kakao" alt="Kakao Login"/>
  </a>
  <p>본 서비스는 <span class="w700">카카오 로그인</span>을 통해 사용자를 식별합니다.<br>
    로그인 시 <span class="w700">이게모야</span>의 <span class="w700 underline">이용약관</span>과 <span class="w700 underline">개인정보처리방침</span>에 동의하는 것으로 간주됩니다.</p>
</main>