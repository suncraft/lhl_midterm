// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(cookieSession({
  name: 'story creator',
  keys: ['why-bother']
}));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const storiesRoutes = require("./routes/stories");
const viewRoutes = require("./routes/view");
const contributionRoutes = require('./routes/contribution.js');


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above
app.use("/stories", storiesRoutes(db));
app.use("/view", viewRoutes(db));
app.use("/contribution", contributionRoutes(db));

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  db.query(`
  SELECT users.name, users.id FROM users
  WHERE users.id = 2;
  `)
  .then(data => {
    req.session.userName = data.rows[0].name;
    req.session.userId = data.rows[0].id;

    db.query(`
    SELECT * FROM stories;
    `)
    .then(data => {
      const templateVars = {
        stories: data.rows
      }
      //console.log(data.rows, templateVars.stories)
      res.render("index", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

});

//route for sending data to the index page
app.get("/api/index", (req, res) => {
  db.query(`
    SELECT
    stories.*,
    users.name AS username
    FROM stories
    LEFT JOIN users ON users.id = cretor_id
    ORDER BY stories.id DESC
    LIMIT 5;
    `)
    .then(data => {
      //console.log(data.rows, templateVars.stories)
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
})


// SELECT
//     stories.*,
//     users.name AS username,
//     contributions.contribution
//     FROM stories
//     LEFT JOIN users ON users.id = cretor_id
//     LEFT JOIN accepted_story_contributions ON accepted_story_contributions.story_id = stories.id
//     LEFT JOIN contributions ON contributions.id = accepted_story_contributions.contribution_id
//     ;
// ,
//     (SELECT COUNT(stories.*) FROM stories
//       JOIN accepted_story_contributions ON stories.id = accepted_story_contributions.story_id)
//     AS upvotes
// contributions.*
// LEFT JOIN accepted_story_contributions ON accepted_story_contributions.story_id = stories.id
//     INNER JOIN contributions ON contributions.id = accepted_story_contributions.contribution_id
//     INNER JOIN upvote_stories ON upvote_stories.story_id = stories.id

//route for sending contribution data to the index page
// app.get("/api/acceptedcontributions", (req, res) => {
//   db.query(`
//     SELECT
//     contributions.*
//     FROM contributions
//     INNER JOIN accepted_story_contributions ON accepted_story_contributions.contribution_id = contributions.id
//     ;
//     `)//GROUP BY stories.id, accepted_story_contributions.id
//     .then(data => {
//       //console.log(data.rows, templateVars.stories)
//       res.json(data.rows);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// })


// //route for sending story upvotes to the index page
// app.get("/api/storyupvotes", (req, res) => {
//   db.query(`
//     SELECT
//     stories.*,
//     users.name AS username,
//     contributions.contribution
//     FROM stories
//     LEFT JOIN users ON users.id = cretor_id
//     LEFT JOIN accepted_story_contributions ON accepted_story_contributions.story_id = stories.id
//     LEFT JOIN contributions ON contributions.id = accepted_story_contributions.contribution_id
//     ;
//     `)//GROUP BY stories.id, accepted_story_contributions.id
//     .then(data => {
//       //console.log(data.rows, templateVars.stories)
//       res.json(data.rows);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// })






//route for sending data to the index page
app.get("/api/view", (req, res) => {
  db.query(`
    SELECT stories.*, contributions.*, users.name AS username FROM stories
    JOIN users ON users.id = cretor_id
    JOIN accepted_story_contributions ON accepted_story_contributions.story_id = stories.id
    JOIN contributions ON contributions.id = accepted_story_contributions.contribution_id
    JOIN upvote_stories ON upvote_stories.story_id = stories.id
    JOIN upvote_contribution ON upvote_contribution.contribution_id = contributions.id;
    `)
    .then(data => {
      //console.log(data.rows)
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
})


app.post("/", (req, res) => {
  //if there's text in the text box and the button has been pressed, redirect
  //not sure if this distinguishes between title/body of story input?
  if (!req.query.title) {
    res.status(400).json({ error: 'Woah there, your story needs a title! Try writing one =)'});
    return;
  };
  if (!req.query.story) {
    res.status(400).json({ error: 'Woah there, your story needs a beginning! Try writing one =)'});
    return;
  };
  const user = req.body.user
  const newStory = {
    user: user,
    content: {
      text: req.body.text,
      title: req.body.title
    }
  }
  //still need to escape user input text to prevent attacks
  //not sure if this query works

  db.query(`
  INSERT INTO stories (cretor_id, story_title, story_beginning, is_complete)
  VALUES ( ${user.id}, ${user.content.title}, ${user.content.text}, 0)
  RETURNING *;
  `)
  .then(data => {
    const templateVars = { data };
    console.log("I tried posting a new story on index");
    res.redirect("view", templateVars);
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
module.exports = {
  Pool,
  dbParams,
  db
};
