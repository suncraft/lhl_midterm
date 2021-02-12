<<<<<<< HEAD
// const createStoryElement = function(story) {
=======
//const createStoryElement = function(story) {
>>>>>>> stuffsAndThings
  //   //const date = $.timeago(new Date(story.created_at));
  //   const $story = `
  //   <article class="card part">
  //   <div class="card-header"><span>${story.story_title}</span><span>By: ${req.session.userID}</span></div>
  //   <div class="thumbnails"><img src="${story.cover_photo_url}"></div>
  //   <div class="story">${story.story_beginning}</div>
  //   <footer class="upvotes"><button>Contribute</button><button>Upvotes: +4</button></footer>
  //   </article>
  //   `;
  //   return $story;
  // };

  $(document).ready(function() {
    //checks form isn't empty, creates and redirects to view new story
    $("form").on("submit", function(event) {
      //event.preventDefault();
      const title = $(this.children[1]).val().trim();
      const text = $(this.children[2]).val().trim();
      const $string = $(this).serialize();
      console.log('title', title, 'text', text)
      console.log('story object', storyID, 'storyid', storyID.id)
      //errors are not currently working, were before I changed post to get?
      if (title.length < 1) {
        throw new Error("Please enter a title to submit a story.");
      } else if (text === "" || text === null) {
        throw new Error("Please enter a start to your story before submitting.");
      } else {
        //change hardcoded image to refer to db once db has actual images to refer to
        // const storyID = db.query(`
        // INSERT INTO stories (creator_id, story_title, story_beginning, is_complete, cover_photo_url)
        // VALUES (${req.session.userID}, ${$(this.children[1]).val().trim()}, ${$(this.children[2]).val().trim()}, 0, https://www.pexels.com/photo/landscape-photography-of-brown-mountains-surrounding-lake-620337/)
        // RETURNING *;
        // `);

        const user = req.session.userId
        const newStory = {
          user: user,
          content: {
            text: $(this.children[1]).val().trim(),
            title: $(this.children[2]).val().trim()
          }
        }
        console.log('user=', user, 'user.id=', user.id)
        $.ajax({
          url: `view/${user.id}`,
          method: "POST",
          data: $string
        })
          .done(() => {
            console.log('title', title, 'text', text)
            $(".incomplete-stories").prepend(createStoryElement(newStory))
            res.redirect(`view/${user.id}`)
          })
          .fail(error => console.log(error));
      }
    });

    //handles an upvote to a displayed story - only started with copy/paste not doing anything yet
    $(".upvotes").on("submit", function(event) {
      event.preventDefault();
      const title = $(this.children[1]).val().trim();
      const text = $(this.children[2]).val().trim();
      const $string = $(this).serialize();
      if (title.length < 1) {
        renderError("Please enter a title to submit a story.");
      } else if (text === "" || text === null) {
        renderError("Please enter a start to your story before submitting.");
      } else {
        $.ajax({
          url: "/",
          method: "POST",
          data: $string
        })
          .done(() => {
            res.render("index")//view/${db.query(`insert then return new id`)}
          })
          .fail(error => console.log(error));
      }
    });


  });
