//this will be what loads the sample stories to the index page
$(document).ready(function() {


  $.ajax({
    method: "GET",
    url: "/api/stories"
  }).done((stories) => {
    for(story of stories) {
      if (story.is_complete) {
        $(".completed").prepend(createStoryElement(story));
      } else {
        $(".incomplete-stories").prepend(createStoryElement(story));
      }
    }
    //console.log(stories)
  });;

  console.log("created story element3")
  const createStoryElement = function(story) {
    //const date = $.timeago(new Date(story.created_at));
    // console.log(story)
    const $story = `
    <article class="card part">
    <div class="card-header"><span>${story.story_title}</span><span>By: ${story.cretor_id}</span></div>
    <div class="thumbnails"><img src="${story.cover_photo_url}"></div>
    <div class="story">${story.story_beginning}</div>
    <footer class="upvotes"><button>Contribute</button><button>Upvotes: +4</button></footer>
    </article>
    `;
    console.log("created story element")
    return $story;
  };
  //console.log('data=', stories)//, 'data[0]=', stories[0], 'data.title=', stories.story_title, 'data.beginning=', stories.story_beginning)

});
