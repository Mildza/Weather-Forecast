const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const auth = require("./routes/auth");
const yahoo = require("./routes/yahoo");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", auth);
app.use("/yahoo", yahoo);

app.listen(process.env.PORT || 3001);
