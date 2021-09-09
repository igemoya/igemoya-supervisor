<script>
	import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Index.svelte";
  import NotFound from "./routes/404.svelte";

	export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="/"><Home /></Route>
    <Route path=""><NotFound /></Route>
  </div>
</Router>

<link rel="stylesheet" href="/global.css">