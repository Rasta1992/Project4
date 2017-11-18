const axios = require("axios");
const router = require("express").Router();

router.get("/recipes", (req, res) => {
  axios
    .get("http://www.giphy.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
