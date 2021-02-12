const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/completed", function(req, res) {
    console.log(req.body)
    db.query(`UPDATE stories SET is_complete = true WHERE id = ${req.body.storyId};`)
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
