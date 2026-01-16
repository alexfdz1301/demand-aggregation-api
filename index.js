const express = require("express");
const app = express();

app.use(express.json());

// FIRST API
app.post("/api/demand", (req, res) => {
  const orders = req.body.orders;
  let demandLevel = "Low";

  if (orders >= 50 && orders < 100) demandLevel = "Medium";
  if (orders >= 100) demandLevel = "High";

  res.json({
    orders: orders,
    demand_level: demandLevel
  });
});

// SECOND API
app.post("/api/supply-match", (req, res) => {
  const demand = req.body.demand_orders;
  const supply = req.body.supplier_capacity;

  let status = "Not Fulfilled";

  if (supply >= demand) status = "Fulfilled";
  else if (supply >= demand * 0.5) status = "Partially Fulfilled";

  res.json({
    demand_orders: demand,
    supplier_capacity: supply,
    fulfillment_status: status
  });
});

// SERVER START (ALWAYS LAST)
app.listen(3000, () => {
  console.log("Server running");
});

