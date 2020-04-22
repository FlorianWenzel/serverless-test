const app = require("express")();
const fs = require("fs");
const multerConfig = require("../multer.js");

module.exports = app.get("/api/expresstest", multerConfig.saveToUploads, async (req, res) => {
  const file = fs.readFileSync("/tmp/whatevs.jpg")
  res.send(file);
})