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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 3001);
