//this will be what loads the sample stories to the index page
$(document).ready(function() {
  const createStoryElement = function(story) {
    const statuswip = '<footer class="upvotes"><button>Story in progress, would you like to contribute?</button></footer>'
    const statuscomp = '<footer class="upvotes"><button>Story is complete, would you like to view?</button></footer>'
    const $story = `
    <article class="card part" id=${story.id}>
    <div class="card-header"><span>${story.story_title}</span><span>By: ${story.username}</span></div>
    <div class="story">${story.story_beginning}</div>
    ${story.is_complete ? statuscomp : statuswip}
    </article>
    `;
    return $story;
  };
  $.ajax({
    method: "GET",
    url: "/api/index"
  }).done((stories) => {
    for(let story of stories) {
      if (story.is_complete) {
        $(".completed").prepend(createStoryElement(story));
      } else {
        $(".incomplete-stories").prepend(createStoryElement(story));
      }
      $("article.part").click(function(e) {
        e.preventDefault();
        let $string = `storyId=${$(this).attr("id")}`;
        $.ajax({
          url: `/view/${$(this).attr("id")}`,
          method: "GET",
        })
        .done(() => {
          window.location.href = `/view/${$(this).attr("id")}`
        })
      });
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

          $.ajax({
            url: `/new/story`,
            method: "POST",
          })
          .done((data) => {
            console.log("this should be my new story:", data, data.id)
            // $(".incomplete-stories").prepend(createStoryElement(newStory))
            res.redirect(`view/${data.id}`)
          })
          .fail(error => console.log(error))
        }
      })

    }
  });
});
