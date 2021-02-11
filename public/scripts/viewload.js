//this will be what loads the sample stories to the index page
$(document).ready(function() {


  $.ajax({
    method: "GET",
    url: "/api/view"
  }).done((stories) => {
    for(story of stories) {
      if (story.id === 2) {
        $("main").prepend(createStoryElement(story));
      }
    }

      //check there's content in contribution field
  //query db to write the contribution in, return the inserted row
  //AJAX to re-render the page, clear form and display contributions again
  $("form").on("submit", function(event) {
    event.preventDefault();
    //const title = $(this.children[1]).val().trim();
    const text = $(this.children[2]).val().trim();
    const $string = $(this).serialize();
    console.log('text', text)
    //console.log('story object', storyID, 'storyid', storyID.id)
    //errors are not currently working, were before I changed post to get?
    if (text.length < 1) {
      throw new Error("Please enter text for contributing to a story.");
    } else {
      //change hardcoded image to refer to db once db has actual images to refer to
      // const storyID = db.query(`
      // INSERT INTO stories (creator_id, story_title, story_beginning, is_complete, cover_photo_url)
      // VALUES (${req.session.userID}, ${$(this.children[1]).val().trim()}, ${$(this.children[2]).val().trim()}, 0, https://www.pexels.com/photo/landscape-photography-of-brown-mountains-surrounding-lake-620337/)
      // RETURNING *;
      // `);
      db.query(`
      INSERT INTO contributions (story_id, contribution, user_id)
      VALUES (${$("article.full").attr("id")}, '${req.query.contribution}', ${req.session.userId})
      RETURNING *;
      `)
      .then(data => {
        console.log("query1 executed")
        db.query(`
          INSERT INTO accepted_story_contributions (story_id, contribution_id)
          VALUES (${$("article.full").attr("id")}, '${data.id}')
          RETURNING *;
        `)
        .then(data => {
          console.log("query2 executed")
          $.ajax({
            url: `view/${data.story_id}`,
            method: "GET",
            data: data.rows
          })
            .done(() => {
              console.log(data)
              //$(".incomplete-stories").prepend(createStoryElement(newStory))
              // res.redirect(`view/${data.story_id}`)
              $.ajax({
                method: "GET",
                url: "/api/view"
              }).done((stories) => {
                for(story of stories) {
                  if (story.id === 2) {
                    $("main").prepend(createStoryElement(story));
                  }
                }
            })
            .fail(error => console.log(error));
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
    })
    //console.log(stories)
    };
  });

  console.log("created story element3")
  const createStoryElement = function(story) {
    //const date = $.timeago(new Date(story.created_at));
    // console.log(story)
    const $story = `
    <article class="card part" id=${story.story_id}>
    <div class="card-header"><span>${story.story_title}</span><span>By: ${story.username}</span></div>
    <div class="thumbnails"><img src="styles/blue.jpg"></div>
    <div class="story">${story.story_beginning} ${story.contribution}</div>
    <footer class="upvotes"><button>Contribute</button><button>Upvotes: +4</button></footer>
    </article>
    `;
    //${story.story_beginning}
    console.log("created story element")
    return $story;
  };
  //console.log('data=', stories)//, 'data[0]=', stories[0], 'data.title=', stories.story_title, 'data.beginning=', stories.story_beginning)





      // const user = req.session.userId
      // const newStory = {
      //   user: user,
      //   content: {
      //     text: $(this.children[1]).val().trim(),
      //     title: $(this.children[2]).val().trim()
      //   }
      // }
      // console.log('user=', user, 'user.id=', user.id)


  });

});
