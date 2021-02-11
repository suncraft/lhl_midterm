const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //render stories page which will have filters on top and
  //have the loaded either completed or wip stories below
  //{"error":"column \"_____\" does not exist"}
  router.get("/", (req, res) => {
    let ourQuery = "SELECT * FROM stories;";
    // sort by completed "sort by complete"
    if (req.query.completed === 'Completed') {
      ourQuery = 'SELECT stories.*, users.name FROM stories INNER JOIN users ON users.id = stories.cretor_id AND stories.is_complete = true'
    // sort by incomplete
    } else if (req.query.incompleted === 'Not-completed') {
      ourQuery = 'SELECT stories.*, users.name FROM stories INNER JOIN users ON users.id = stories.cretor_id AND stories.is_complete = false'
    // search by user
    } else if(req.query.filterUser !== '') {
      ourQuery = `SELECT stories.*, users.name FROM stories INNER JOIN users ON users.id = stories.cretor_id AND users.name = '${req.query.filterUser}';`;
    // search by keywords in title
    } else if(req.query.filterKeyword !== '') {
      ourQuery = `SELECT stories.*, users.name FROM stories INNER JOIN users ON story_title LIKE '%${req.query.filterKeyword}%' AND users.id = stories.cretor_id;`;

    // sort by most liked
    } else if(req.query.mostLiked === 'By Likes') {
      ourQuery = `SELECT stories.*, count(*) FROM stories LEFT JOIN upvote_stories ON stories.id = upvote_stories.story_id GROUP BY stories.id;`;
    }
    db.query(ourQuery)
    .then(data => {
      res.render("filtered_stories", {data: data.rows});
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
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
    res.redirect(`/stories`)

  });

  //render my-stories page, showing their stories
  router.get("/:id", (req, res) => {
    let ourQuery = `SELECT stories.*, users.name FROM stories INNER JOIN users ON users.id = stories.cretor_id AND users.name = '${req.session.userId}';`;

    db.query(ourQuery)
    .then(data => {
      res.render("filtered_stories", {data: data.rows});
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    });
    //"show story page, templatevars"
    res.render("view")
    //all current users stories
  });


   //redirects to /view/:id to display specific story/wip, or whatever is clicked
  router.post("/:id", function(req, res) {
    //redirect to /view/:id to display specific story/wip
    res.redirect(`/view/${"storyid"}`)

  });

  return router;
};
