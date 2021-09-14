<svelte:head>
  <link rel="stylesheet" href="/css/global.css">
</svelte:head>

<script lang="ts">
	import { Router, Route, navigate } from "svelte-routing";
  import Index from "./routes/Index.svelte";
  import Home from "./routes/supervisor/Index.svelte";
  import Auth from "./routes/oauth/Index.svelte";
  import Logout from "./routes/oauth/Logout.svelte";
  import NotFound from "./routes/404.svelte";

  if(localStorage.jwt) {
    navigate('/supervisor', { replace: true });
  }

	export let url = "";
</script>

<Router url="{url}">
  <div>
    <!-- / -->
    <Route path="/"><Index /></Route>
    <!-- /supervisor -->
    <Route path="/supervisor"><Home /></Route>
    <!-- /oauth -->
    <Route path="/oauth"><Auth /></Route>
    <Route path="/oauth/logout"><Logout /></Route>
    <!-- 404 -->
    <Route path=""><NotFound /></Route>
  </div>
</Router>