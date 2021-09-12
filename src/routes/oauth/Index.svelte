<script lang="ts">
  import "axios";
import axios from "axios";
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get("code");
  axios.get(`https://igemoya-backend.herokuapp.com/oauth?code=${code}`)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
</script>