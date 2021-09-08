<script>
	import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Index.svelte";
  import Test from "./routes/Test.svelte";
  import NotFound from "./routes/404.svelte";

	export let url = "";
</script>

<Router url="{url}">
  <div>
    <Route path="/" component="{Home}" />
    <Route path="" component="{NotFound}" />
  </div>
</Router>