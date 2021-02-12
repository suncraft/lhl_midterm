const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //render view of the story with that id, if not a completed story, load contributions that are still waiting
  router.get("/:id", (req, res) => {

    //specific story that user selected
    db.query(`SELECT stories.story_title, stories.story_beginning, users.name, contributions.contribution FROM stories NATURAL JOIN users LEFT JOIN contributions ON stories.id = contributions.story_id LEFT JOIN accepted_story_contributions ON accepted_story_contributions.story_id = stories.id  WHERE stories.id = 2;`)
    .then(data => {
      res.render("view", {data: data.rows});
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  //toggle complete status
  //choose a contribution to accept/reject
  //add a contribution you wrote
  //upvote a contribution

  router.post("/:id", function(req, res) {
    db.query(`INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete) VALUES (${req.session.userId}, '${req.body.title}', '${req.body.story}', false);`)
    .then(data => {
      console.log("query executed")
      // res.redirect(`/view/${this.id}`)
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  return router;
};
