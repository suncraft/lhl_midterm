const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.post("/contribution", function(req, res) {
    console.log(req.session.userId, req.body.contribution, req.body.storyID)
    console.log(req.body)
  });

  return router;
};
