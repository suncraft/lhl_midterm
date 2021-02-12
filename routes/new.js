const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.post("/story", function(req, res) {
    console.log("attempted new story", req.body)
    db.query(`
    INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete)
    VALUES (2, '${req.body.title}', '${req.body.story}', false)
    ;
    `)//, [``, ``])
    .then(data => {
      //console.log("this should be my new story:", data)
      res.render(`index`)
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};
