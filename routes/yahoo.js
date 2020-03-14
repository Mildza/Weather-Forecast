const express = require("express");
const router = express.Router();
const OAuth = require("oauth");

const header = {
  "X-Yahoo-App-Id": "your-app-id"
};
const request = new OAuth.OAuth(
  null,
  null,
  "dj0yJmk9WTBRRVJQRDc3SnNNJmQ9WVdrOVdrWk1ZVkF5TkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTVj",
  "d4164f684aa44b701b3090b612621b46474448e1",
  "1.0",
  null,
  "HMAC-SHA1",
  null,
  header
);

router.get("/:city", function(req, res, next) {
  console.log(req.params.city);

  const city = req.params.city || "nis,serbia";
  request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city}&u=c&format=json`,
    null,
    null,
    function(err, data, result) {
      if (err) {
        console.log(err);
      } else {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        return res.send(data);
      }
    }
  );
});

module.exports = router;
