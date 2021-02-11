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
      // if (story.is_complete) {
      //   $(".completed").prepend(createStoryElement(story));

      // } else {
      //   $(".incomplete-stories").prepend(createStoryElement(story));
      // }

      $("article.part").on("click", function(event) {
        //console.log($(this).attr("id"))
        window.location.href = `/view/${$(this).attr("id")}`
      })
    }
    //console.log(stories)
  });

  console.log("created story element3")
  const createStoryElement = function(story) {
    //const date = $.timeago(new Date(story.created_at));
    // console.log(story)

    const statuswip = '<footer class="upvotes"><button>Story in progress, would you like to contribute?</button></footer>'
    const statuscomp = '<footer class="upvotes"><button>Story is complete, would you like to view?</button></footer>'
    const $story = `
    <article class="card part" id=${story.story_id}>
    <div class="card-header"><span>${story.story_title}</span><span>By: ${story.username}</span></div>
    <div class="story">${story.story_beginning}</div>
    ${story.is_complete ? statuscomp : statuswip}
    </article>
    `;
    //${story.story_beginning}
    console.log("created story element", story.contribution, story.story_id)
    return $story;
  };
  //console.log('data=', stories)//, 'data[0]=', stories[0], 'data.title=', stories.story_title, 'data.beginning=', stories.story_beginning)
//    <div class="thumbnails"><img src="styles/blue.jpg"></div>
});

/* <button>Upvotes: ${story.upvotes ? story.upvotes: 0}</button> */
  // <article class="card part" id=${story.story_id}>
  //   <div class="card-header"><span>${story.story_title}</span><span>By: ${story.username}</span></div>
  //   <div class="story">${story.story_beginning} ${story.contribution ? story.contribution: ""}</div>
  //   <footer class="upvotes"><button>Contribute</button><button>Upvotes: ${story.upvotes ? story.upvotes: 0}</button></footer>
  //   </article>
