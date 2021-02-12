const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/:id", (req, res) => {
    //  this right here is the only thing i changed
    console.log("this here is the god variable ===>", req.params.id)
    //  i dont know why but req.params has an id key that holds the correct id of each story
    //  so i used that as the value for the query and didnt need to directly pass anything between pages
    ///////////////////////////////////////////////////////////////////////
    //  what i would work on if you can is the page reloads for when you click buttons on the view page
    // other than that the only bug i can think of is the one i mentioned in slack
    //  where if "req.params.id" is 3 the query fails and throws a 500
    //  this happens regardless of what you put for "stories.id = 3" in the database
    //  this query seems to act like it does not exist
    //  oh and the markcomplete button does not change if the story is complete
    //  the query does work tho(can test this using either the filters page or using psql)
    db.query(`
    SELECT contributions.story_id AS storyId, accepted_story_contributions.contribution_id, contributions.contribution AS contribution, contributions.id AS contributionID, stories.story_title AS title, stories.story_beginning AS beginning, stories.is_complete
    FROM accepted_story_contributions
    RIGHT JOIN contributions ON accepted_story_contributions.contribution_id = contributions.id
    JOIN stories ON stories.id = contributions.story_id
    WHERE stories.id = ${req.params.id};
    `)
    .then(data => {
      console.log({data: data.rows})
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
