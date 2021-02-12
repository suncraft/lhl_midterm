const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/contribution", function(req, res) {
    db.query(`INSERT INTO accepted_story_contributions (story_id, contribution_id) VALUES (2, ${req.body.contributionId});`)
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
