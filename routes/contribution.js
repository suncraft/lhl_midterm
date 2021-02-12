const express = require('express');
const router  = express.Router();

module.exports = (db) => {
//INSERT INTO contributions (story_id, contribution, user_id) VALUES (1, 'stuffs and things', '${req.body.userId}');
  router.post("/contribution", function(req, res) {
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
