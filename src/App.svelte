<svelte:head>
  <link rel="stylesheet" href="/css/global.css">
</svelte:head>

<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Index.svelte";
  import NotFound from "./routes/404.svelte";

	export let url = "";
</script>

<Router url="{url}">
  <div>
    <!-- / -->
    <Route path="/"><Home /></Route>
    <!-- 404 -->
    <Route path=""><NotFound /></Route>
  </div>
</Router>