const express = require("express");
var cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Express server is running at http://localhost:3000");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
