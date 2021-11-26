const express = require("express");
// const { countAllRequests } = require("./monitoring");

const PORT = process.env.PORT || "8080";
const app = express();

// app.use(countAllRequests());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/date", (req, res) => {
  res.json({ today: new Date() });
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
