require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
//Reference used for class UserUtil where all CRUD function are stored
const UsersUtil = require("./utils/UserUtil");
const app = express();

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.set("view engine", "ejs");

let Random = "test";

//initial reply
app.get("/", async (req, res) => {
  //UsersUtil References readDB function in ./utils/UserUtil
   something = await UsersUtil.readDB();
  
    console.log(something[0] + "  Crash HERE if undefined");
    res.render("index", {
      something: something[0].Random
    });
  });
// creation call
app.post("/submit", async (req, res) => {
  //UsersUtil References create function in ./utils/UserUtil
    const response = await UsersUtil.create(req.body);
  
    if (!response) console.error(response);
  
    res.redirect("/");
  });

//update call
app.post("/update", async (req, res) => {
  //UsersUtil References updateOne function in ./utils/UserUtil
  const response = await UsersUtil.updateOne(req.body);

  if (!response) console.error(response);

  res.redirect("/");
});

//deletion call
  app.post("/delete", async (req, res) => {
    //UsersUtil References deleteEntry function in ./utils/UserUtil
    const response = await UsersUtil.deleteEntry(req.body);
  
    if (!response) console.error(response);
  
    res.redirect("/");
  });
  
//Listening
app.listen(PORT, () =>
  console.log(`Server is running: http://localhost:${PORT}/`)
);
