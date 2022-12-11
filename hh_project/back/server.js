const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("../back/app/routes/rt");
const app = express();
const pg = require("pg");

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
//routes https://www.youtube.com/watch?v=W5Ky44mWQZE&t=375s

app.use(router);

app.post("/signup", (req, res),next => {
 
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});