const express = require("express");
const router = require("./routes/index");
const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");
// app.set("views", "./views/single.ejs");
app.use(express.static("public"));

app.use("/", router);

app.use((err, req, res, next) => {
  err =
    process.env.NODE_ENV == "production"
      ? "something went wrong ...."
      : err.toString();
  res.status(500).send(err);
});

app.listen(3009);

console.log("app is running on port 3009");
