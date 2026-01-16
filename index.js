const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/demand", (req, res) => {
  const orders = req.body.orders;

  let demandLevel = "Low";

  if (orders >= 50 && orders < 100) {
    demandLevel = "Medium";
  }

  if (orders >= 100) {
    demandLevel = "High";
  }

  res.json({
    orders: orders,
    demand_level: demandLevel
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
