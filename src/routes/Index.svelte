<svelte:head>
  <link rel="stylesheet" href="/css/index.css">
</svelte:head>

<script lang="ts">
  import "../@type/index.d.ts";
  
  Kakao.init("f246de8d71e0c8320cb967a7361ae9fe");

  const loginWithKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/'
    });
  };

  const getCookie = (name) => {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const displayToken = () => {
    const token = getCookie('authorize-access-token');
    if(token) {
      Kakao.Auth.setAccessToken(token);
      Kakao.Auth.getStatusInfo(({ status }) => {
        if(status === 'connected') {
          alert('login success. token: ' + Kakao.Auth.getAccessToken());
        } else {
          Kakao.Auth.setAccessToken(null);
        }
      })
    }
  };
  displayToken();
</script>

<main>
  <img src="/images/igemoya.svg" alt="igemoya" id="logo">
  <span id="logoText"><span class="w900">이게모야</span>&nbsp;관리자</span>
  <a id="kakaoButton" on:click={loginWithKakao}>
    <img src="/images/kakao_login.png" id="kakao" alt="Kakao Login"/>
  </a>
  <p>본 페이지에 "카카오 로그인"을 진행함으로써<br>서비스의 이용약관과 개인정보처리방침에 동의하는 것으로 간주합니다.</p>
</main>