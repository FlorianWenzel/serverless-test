const app = require("express")();
const fs = require("fs");
const multerConfig = require("../multer.js");

module.exports = app.post("/api/expresstest", multerConfig.saveToUploads, async (req, res) => {
  res.send({ sucess: true });
})