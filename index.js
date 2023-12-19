const express = require("express");
const app = express();
const dashboard=require("./routers/Product")
const login = require("./routers/users");
const Client=require("./routers/Orders")
const checkAuth = require("./middleware");

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//الصفحه ما كامله

app.use("/api/v1/login", checkAuth,login);
app.use("/api/v2/dashboard", dashboard);
app.use("/api/v3/Client", Client);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
