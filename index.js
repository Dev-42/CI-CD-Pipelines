const cors = require("cors");
const express = require("express");
const { getAllEmployees, getEmployeesById } = require("./controllers/index");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/employees", (req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});
app.get("/employees/details/:id", (req, res) => {
  const employee = getEmployeesById(parseInt(req.params.id));
  res.json({ employee });
});

app.listen(3000, () => {
  console.log("Server started successfully at port 3000");
});
module.exports = { app };
