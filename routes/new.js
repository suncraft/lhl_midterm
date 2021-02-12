const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.post("/story", function(req, res) {
    console.log("attempted new story", req.body.story_title, req.body.story_beginning, req.params.story_beginning, req.params.id)
    db.query(`
    INSERT INTO stories (cretor_id, story_title, story_beginning)
    VALUES (2, $1, $2)
    RETURNING *;
    `, [`${req.body.story_title}`, `${req.body.story_beginning}`])
    .then(data => {
      console.log("this should be my new story:", data, data.id)
      res.redirect(`view/${data.id}`)
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });
  return router;
};
