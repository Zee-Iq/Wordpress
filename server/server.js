const express = require("express");
const app = express();
app.get("/greeting", (req, res) => {
  res.json({ greeting: "Hello from /greeting" });
});

app.listen(5000, () => console.log("App running at port 5000"));
