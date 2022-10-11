require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const UsersUtil = require("./utils/UserUtil");
const app = express();

const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));
app.set("view engine", "ejs");

//initial reply
app.get("/", async (req, res) => {
   something = await UsersUtil.readDB();
  
    res.render("index", {
      something: something,
    });
  });
// creation call
app.post("/submit", async (req, res) => {
    const response = await UsersUtil.create(req.body);
  
    if (!response) console.error(response);
  
    res.redirect("/");
  });

//deletion
app.post("/delete", async (req, res) => {
    const response = await UsersUtil.deleteEntry(req.body);
  
    if (!response) console.error(response);
  
    res.redirect("/");
  });

//Listening
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));
