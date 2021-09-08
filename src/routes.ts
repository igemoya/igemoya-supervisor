import Home from "./routes/Index.svelte";
import Test from "./routes/Test.svelte";
import NotFound from "./routes/404.svelte";

export default {
  "/": Home,
  "/test": Test,
  "*": NotFound,
};
