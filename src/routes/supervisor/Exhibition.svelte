<svelte:head>
  <link rel="stylesheet" href="/css/supervisor.css">
</svelte:head>

<script lang="ts">
  import { navigate } from "svelte-routing";

  import Navbar from "../../components/Navbar.svelte";
  import axios from "axios";

  let userName = "";
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
  <Navbar previousMenu="관리자 메인" previousUrl="/supervisor" {userName} />
</main>
