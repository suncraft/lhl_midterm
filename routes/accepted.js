const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/contribution", function(req, res) {
    db.query(`
    UPDATE contributions
    SET is_accepted = TRUE
    WHERE contributions.id = ${req.body.contributionId};
    `)
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
