
const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  //render stories page which will have filters on top and
  //have the loaded either completed or wip stories below
  router.get("/", (req, res) => {
    res.render("completed and wip stories page")
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
  });


   //redirects to /view/:id to display specific story/wip, or whatever is clicked
  router.post("/:id", function(req, res) {
    //redirect to /view/:id to display specific story/wip
    res.redirect(`/view/${"storyid"}`)

  });

  return router;
};
