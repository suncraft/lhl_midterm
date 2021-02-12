const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/contribution", function(req, res) {
    console.log(req.body)
    db.query(`INSERT INTO contributions (story_id, contribution, user_id) VALUES (${req.body.storyId}, '${req.body.contribution}', ${req.session.userId});`)
    .then(data => {
      console.log("query completed");
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  return router;
};
