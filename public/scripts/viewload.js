//this will be what loads the sample stories to the index page
$(document).ready(function() {


  $.ajax({
    method: "GET",
    url: "/api/view"
  }).done((stories) => {
    for(story of stories) {
      if (story.id === 2) {
        $(".completed").prepend(createStoryElement(story));
      }
    }
    //console.log(stories)
  });

  console.log("created story element3")
  const createStoryElement = function(story) {
    //const date = $.timeago(new Date(story.created_at));
    // console.log(story)
    const $story = `
    <article class="card part" id=${story.id}>
    <div class="card-header"><span>${story.story_title}</span><span>By: ${story.cretor_id}</span></div>
    <div class="thumbnails"><img src="styles/blue.jpg"></div>
    <div class="story">${story.story_beginning}</div>
    <footer class="upvotes"><button>Contribute</button><button>Upvotes: +4</button></footer>
    </article>
    `;
    //${story.story_beginning}
    console.log("created story element")
    return $story;
  };
  //console.log('data=', stories)//, 'data[0]=', stories[0], 'data.title=', stories.story_title, 'data.beginning=', stories.story_beginning)



});
