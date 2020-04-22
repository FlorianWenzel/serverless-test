const app = require("express")();
const http = require("http").createServer(app);

app.get("*", async (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.get("register", async (req, res) => {
  res.send({ msg: "THIS IS the /register ENDPINT" })
})

http.listen(3000, function() {
  console.log("listening on *:3000");
});