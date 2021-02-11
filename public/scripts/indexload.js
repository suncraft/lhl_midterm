//this will be what loads the sample stories to the index page
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/index"
  }).done((stories) => {
    for(story of stories) {
      //console.log(stories)
      let storyArr = [];
      if (!storyArr.includes(story.story_id)) {
        storyArr.push(story.story_id)
        if (story.is_complete) {
          $(".completed").prepend(createStoryElement(story));

        } else {
          $(".incomplete-stories").prepend(createStoryElement(story));
        }
      } else {

      }
      $("article.part").on("click", function(event) {
        window.location.href = `/view/${$(this).attr("id")}`
      })
    }
  });

  const createStoryElement = function(story) {
    //const date = $.timeago(new Date(story.created_at));
    const $story = `
    <article class="card part" id=${story.story_id}>
    <div class="card-header"><span>${story.story_title}</span><span>By: ${story.username}</span></div>
    <div class="story">${story.story_beginning} ${story.contribution ? story.contribution: ""}</div>
    <footer class="upvotes"><button>Contribute</button><button>Upvotes: ${story.upvotes ? story.upvotes: 0}</button></footer>
    </article>
    `;
    //${story.story_beginning}
    //console.log("created story element", story.contribution, story.story_id)
    return $story;
  };
});
