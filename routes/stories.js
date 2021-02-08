
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //render stories page which will have filters on top and
  //have the loaded either completed or wip stories below
  router.get("/", (req, res) => {
    res.render("completed and wip stories page")

    // sort by completed
    if ("sort by complete") {
      // sort by order added
      if ("sort by completed and id ascending") {
        db.query('SELECT * FROM stories WHERE is_complete = true ORDER BY id ASC;');
      } else if ("sort by completed and id decending") {
        db.query('SELECT * FROM stories WHERE is_complete = true ORDER BY id DESC;');
      } else {
        db.query('SELECT * FROM stories WHERE is_complete = true;');
      }
    // sort by incomplete
    } else if ("sort by incomplete") {
      // sort by order added
      if ("sort by incomplete and id ascending") {
        db.query('SELECT * FROM stories WHERE is_complete = false ORDER BY id ASC;');
      } else if ("sort by incomplete and id decending") {
        db.query('SELECT * FROM stories WHERE is_complete = false ORDER BY id DESC;');
      } else {
        db.query('SELECT * FROM stories WHERE is_complete = false;');
      }
    // search by user
    } else if("user wants to search by specific user") {
      db.query('SELECT * FROM stories WHERE cretor_id = _____;');
    // search by keywords in title
    } else if("user wants to search titles by keyword/phrases") {
      db.query(`SELECT * FROM stories WHERE story_title LIKE '%_____%';`);
    // sort by most liked
    } else if("sort by most liked") {

    }else {
      db.query('SELECT * FROM stories;');
    }

  });

  //redirects to /view/:id to display specific story/wip
  //of if the start story box is used, redirects to the created story
  router.post("/", function(req, res) {
    //if there's text in the text box and the button has been pressed, redirect
    if (false) {
      res.status(400).json({ error: 'Woah there, your story needs a beginning! Try writing one =)'});
      return;
    };
    //else redirect to /view/:id to display specific story/wip
    res.redirect(`/view/${"storyid"}`)

  });

  //render my-stories page, showing their stories
  router.get("/:id", (req, res) => {
    //const templateVars = { shortURL: req.params.shortURL, longURL: urlDatabase[req.params.shortURL].longURL, user: users[req.session.userId]};
    res.render("show story page, templatevars")
    //all current users stories
  });


   //redirects to /view/:id to display specific story/wip, or whatever is clicked
  router.post("/:id", function(req, res) {
    //redirect to /view/:id to display specific story/wip
    res.redirect(`/view/${"storyid"}`)

  });

  return router;
};
