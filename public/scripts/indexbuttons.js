// <<<<<<< HEAD
// // const createStoryElement = function(story) {
// =======
// //const createStoryElement = function(story) {
// >>>>>>> stuffsAndThings
//   //   //const date = $.timeago(new Date(story.created_at));
//   //   const $story = `
//   //   <article class="card part">
//   //   <div class="card-header"><span>${story.story_title}</span><span>By: ${req.session.userID}</span></div>
//   //   <div class="thumbnails"><img src="${story.cover_photo_url}"></div>
//   //   <div class="story">${story.story_beginning}</div>
//   //   <footer class="upvotes"><button>Contribute</button><button>Upvotes: +4</button></footer>
//   //   </article>
//   //   `;
//   //   return $story;
//   // };

$(document).ready(function() {
  //checks form isn't empty, creates and redirects to view new story
  $("form").on("submit", function(event) {
    event.preventDefault();
    const title = $(this.children[1]).val().trim();
    const text = $(this.children[2]).val().trim();
    const $string = $(this).serialize();
    console.log('title', title, 'text', text)
    //console.log('story object', storyID, 'storyid', storyID.id)

    if (title.length < 1) {
      alert("Please enter a title to submit a story.");
      return;
    } else if (text === "" || text === null) {
      alert("Please enter a start to your story before submitting.");
      return;
    } else {

      db.query(`
      INSERT INTO stories (cretor_id, story_title, story_beginning, cover_photo_url)
      VALUES (2, $1, $2, #)
      RETURNING *;
      `, [`${$(this.children[1]).val().trim()}`, `${$(this.children[2]).val().trim()}`]
      )
      .done((data) => {
        console.log("this should be my new story:", data, data.id)
        // $(".incomplete-stories").prepend(createStoryElement(newStory))
        res.redirect(`view/${data.id}`)
      })
      .fail(error => console.log(error))

      // //const user = req.session.userId
      // const newStory = {
      //   user: user,
      //   content: {
      //     text: $(this.children[1]).val().trim(),
      //     title: $(this.children[2]).val().trim()
      //   }
      // }
      // console.log('user=', user, 'user.id=', user.id)
      // $.ajax({
      //   url: `view/${user.id}`,
      // //   method: "POST",
      // //   data: $string
      // // })
      //   .done(() => {
      //     console.log('title', title, 'text', text)
      //     $(".incomplete-stories").prepend(createStoryElement(newStory))
      //     res.redirect(`view/${user.id}`)
      //   })
      //   .fail(error => console.log(error));
    }
  });

});
