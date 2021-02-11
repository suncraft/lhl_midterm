const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //render view of the story with that id, if not a completed story, load contributions that are still waiting
  router.get("/:id", (req, res) => {
    //const templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL].longURL, user: users[req.session.userId]};
    //`/${"storyid"}`,"view/id page, templatevars"
    res.render("view")
    //specific story that user selected
    db.query(`SELECT * FROM stories WHERE id = ${req.session.userId};`);
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
