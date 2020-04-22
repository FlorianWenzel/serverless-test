const app = require("express")();

module.exports = app.get("/api/expresstest", async (req, res) => {
  res.send({ msg: "THIS IS the expresstest ENDPINT" })
})