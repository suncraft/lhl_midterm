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
      })
    }
  });
});
