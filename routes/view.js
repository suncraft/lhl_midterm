
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //render view of the story with that id, if not a completed story, load contributions that are still waiting
  router.get("/:id", (req, res) => {
    //const templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL].longURL, user: users[req.session.userId]};
    res.render(`/${"storyid"}`,"view/id page, templatevars")
    //specific story that user selected
    db.query('SELECT * FROM stories WHERE id = _____;');
  });

  //toggle complete status
  //choose a contribution to accept/reject
  //add a contribution you wrote
  //upvote a contribution
  router.post("/:id", function(req, res) {
    //if complete status was toggled, change db, re-render page with jquery
    if (false) {

      //this probably isnt correct syntax mainly here to remind of what to do -Munraj
      let isComplete = db.query('SELECT is_complete FROM stories WHERE id = _____;');
      if(isComplete){
        db.query(`UPDATE stories SET is_complete = false WHERE id = ________;`)
        .then(data => {
          const users = data.rows;
          res.json({ users });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
      } else {
        db.query(`UPDATE stories SET is_complete = true WHERE id = ________;`)
        .then(data => {
          const users = data.rows;
          res.json({ users });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
      }

      return;
    };

    //if contribution is accepted, add to accepted_story_contributions, re-render story
    if (false) {
      //add update query
      db.query(`INSERT INTO accepted_story_contributions (story_id, contribution_id) VALUES (_____, _____);`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
      return;
    }

    //if add contribution button clicked, add to db, re-render
    if (false) {
      db.query(`INSERT INTO contributions (story_id, contribution, user_id) VALUES (_____, '_____', _____);`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
      return res.render("jquery refresh how does this work again?");
    }

    //if contribution upvoted, add the upvote to db, re-render
    if (false) {
      db.query(`INSERT INTO upvote_contribution (user_id, contribution_id) VALUES (_____, _____);`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
      return;
    }
  });
  return router;
};
