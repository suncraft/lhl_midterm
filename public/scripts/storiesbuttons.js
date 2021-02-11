
$(document).ready(function() {
  //checks form isn't empty, creates and redirects to view new story
  $(".card full").on("click", function(event) {
    //event.preventDefault();
    const storyID = $(this.children[1]).val().trim();
    const user = req.session.userId

    console.log(storyID)//not currently storying story id on a card...
    $.ajax({
      url: `view/${storyID}`,
      method: "GET",
      data: $string
    })
      .done(() => {
        console.log('title', title, 'text', text)
        $(".incomplete-stories").prepend(createStoryElement(newStory))
        //res.redirect(`view/${user.id}`)

      })
      .fail(error => console.log(error));
    }
  );

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


  $("article.full").on("click", () => {
    console.log(caller.id)
  })

});
