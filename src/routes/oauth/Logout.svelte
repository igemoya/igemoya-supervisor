<script lang="ts">
  import { navigate } from "svelte-routing";
  localStorage.removeItem("jwt");
  navigate("/", { replace: true });
</script>