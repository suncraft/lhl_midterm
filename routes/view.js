const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/:id", (req, res) => {
    //  this right here is the only thing i changed
    console.log("this here is the god variable ===>", req.params.id)
    /* Jaime's comments
      So bad news first, the query below will yield a server error if the clicked story has 0 accepted contributions
      2 ways around this. First, change our db to get rid of accepted contributions table,
      and just have a column in contributions that stores the boolean value
      Second option which I'm rooting for our demo I think! all seeded stories to have accepted contributions
      drawback of second option: submit button on index will never work for showing that story on view,
      because a just started story will never be able to have an accepted contribution on creation.
      Let's just do that, and make a joke about our table design in the demo.



      Munraj's comments below
    */
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
    SELECT contributions.story_id AS storyId, contributions.is_accepted, contributions.contribution AS contribution, contributions.id AS contributionID, stories.story_title AS title, stories.story_beginning AS beginning, stories.is_complete
    FROM stories
    LEFT JOIN contributions ON stories.id = story_id
    WHERE stories.id = ${req.params.id}
    ORDER BY contributions.id ASC;
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
    // if (!req.query.title) {
    //   res.status(400).json({ error: 'Woah there, your story needs a title and a beginning! Try writing them =)'});
    //   //return;
    // };
    // if (!req.query.story) {
    //   res.status(400).json({ error: 'Woah there, your story needs a beginning! Try writing one =)'});
    //   return;
    // };

    // if (!req.query.contribution) {
    //   res.status(400).json({ error: 'Woah there, your contribution has to have some content! Try writing some =)'});
    //   return;
    // };

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

/*
    SELECT contributions.story_id AS storyId, accepted_story_contributions.contribution_id, contributions.contribution AS contribution, contributions.id AS contributionID, stories.story_title AS title, stories.story_beginning AS beginning, stories.is_complete
    FROM stories
    JOIN contributions ON stories.id = contributions.story_id
    JOIN accepted_story_contributions ON stories.id = contributions.story_id
    WHERE stories.id = 4;
*/
