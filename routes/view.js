const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //render view of the story with that id, if not a completed story, load contributions that are still waiting
  router.get("/:id", (req, res) => {

    db.query(`
    SELECT contributions.story_id AS storyId, accepted_story_contributions.contribution_id, contributions.contribution AS contribution, contributions.id AS contributionID, stories.story_title AS title, stories.story_beginning AS beginning
    FROM accepted_story_contributions
    RIGHT JOIN contributions ON accepted_story_contributions.contribution_id = contributions.id
    JOIN stories ON stories.id = contributions.story_id
    WHERE stories.id = 2;
    `)
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
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
  });

  return router;
};
