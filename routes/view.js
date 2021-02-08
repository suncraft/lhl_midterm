
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //render view of the story with that id, if not a completed story, load contributions that are still waiting
  router.get(`/${"storyid"}`, (req, res) => {
    //const templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL].longURL, user: users[req.session.userId]};
    res.render("view/id page, templatevars")
  });

  //toggle complete status
  //choose a contribution to accept/reject
  //add a contribution you wrote
  //upvote a contribution
  router.post("/:id", function(req, res) {
    //if complete status was toggled, change db, re-render page with jquery
    if (false) {
      db.query(`SELECT * FROM users;`)
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
    };

    //if contribution is accepted, add to db, wipe contributions, re-render story
    if (false) {
      db.query(`SELECT * FROM users;`)
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
    } else if (false) {
      //if contribution is rejected, update database, re-render
      db.query(`SELECT * FROM users;`)
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
      db.query(`SELECT * FROM users;`)
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
      db.query(`SELECT * FROM users;`)
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
