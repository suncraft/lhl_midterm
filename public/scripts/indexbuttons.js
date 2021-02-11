$(document).ready(function() {
  //checks form isn't empty, creates and redirects to view new story
    $("form").on("submit", function(event) {
      event.preventDefault(event);
      let serial= $(this).serialize();
      $.ajax({url: "/view/:id", method: "POST", data: serial})
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
