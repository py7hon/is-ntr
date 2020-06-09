const express = require("express");
const app = express();
const axios = require("axios");

app.set("view engine", "pug");

app.use(express.static("public"));
app.set('views', `${__dirname}/views`);
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/g/:code([0-9]{1,6})", async (request, response) => {
  const { data } = await axios.get(
    `https://nhentai.net/api/gallery/${request.params.code}`
  );
  response.render("template", data);
});

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
