// const { Pool } = require('pg');
// const dbParams = require('./lib/db.js');
//db = require('../../server');





//this will be what loads the sample stories to the index page
$(document).ready(function() {


  console.log("created story element3")
  const createStoryElement = function(story) {
    //const date = $.timeago(new Date(story.created_at));
    const $story = `
    <article class="card part">
    <div class="card-header"><span>${story.story_title}</span><span>By: ${req.session.userID}</span></div>
    <div class="thumbnails"><img src="${story.cover_photo_url}"></div>
    <div class="story">${story.story_beginning}</div>
    <footer class="upvotes"><button>Contribute</button><button>Upvotes: +4</button></footer>
    </article>
    `;
    console.log("created story element")
    return $story;
  };

  db.query(`
    SELECT * FROM stories
    WHERE is_complete = false
    LIMIT 2;
    `)
  .then(data => {
    console.log("created story element2")
    $(".incomplete-stories").prepend(createStoryElement(data.rows))});
});
