import express from "express";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(__dirname + "/../config/config.json");

const port = 80;

const app = express();
app.locals.pretty = true;

app.set("view engine", "ejs");
app.set("views", __dirname + "/../views");
app.use(express.static(__dirname + "/../public"));

import auth from "./auth/index";
app.use("/auth", auth);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
