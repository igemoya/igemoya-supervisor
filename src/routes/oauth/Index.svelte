<script lang="ts">
  import axios from "axios";
  import { navigate } from "svelte-routing";

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  axios.get(`https://igemoya-backend.herokuapp.com/oauth?code=${code}`)
  .then((res) => {
    if(res.status == 200) {
      localStorage.jwt = res.data.jwt;
      navigate('/supervisor', { replace: true });
    } else {
      alert("Error occured.");
    }
  })
  .catch((error) => {
    console.error(error);
  });
</script>