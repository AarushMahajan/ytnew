// const loading = document.querySelector(".loading");
// window.addEventListener("scroll", () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//   console.log({ scrollTop, scrollHeight, clientHeight });

//   if (clientHeight + scrollTop >= scrollHeight - 5) {
//     showLoading();
//   }
// });
// function showLoading() {
//   loading.classList.add("show");
//   setTimeout(getPost, 1000);
// }
var button = document.getElementById("btn");
var links = [];
const searchVideos = async (searchText) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchText.target.value}&key=AIzaSyDdMu63C0VfZwFJPkSqPGUQWKHoyPJ3sI4`
  );
   videos = await res.json();
  console.log(videos);

  videoDisplayMain(0)

    for (let i = 1; i < 5; i++) {
      var body = document.getElementById("body");
      var div = document.createElement("div");
      div.setAttribute("class", "div" + i);
      
      div.innerHTML = `https://www.youtube.com/embed/${videos.items[i].id.videoId}`

    var newVideoRender = document.createElement("button");
    newVideoRender.innerHTML = "click me!!!";
    newVideoRender.setAttribute("onClick", "videoDisplayMain(" + i + ")");
    div.appendChild(newVideoRender);

    body.appendChild(div);

  }
  // videoDisplayMain(4)
    var play = document.createElement("button");
    play.textContent = "show PlayList";
    play.setAttribute("onClick", "relod()");
    body.appendChild(play);

    

};

   function videoDisplayMain(i) {
    var x = document.getElementById('if')
    x.setAttribute('src',`https://www.youtube.com/embed/${videos.items[i].id.videoId}`) 
  };


//show playlist call


function abc(a) {
  console.log(a);
  links.push(a);
  // alert()
  console.log(links);

}
///// delete from playlist

function delete1(i){
    links.splice(i,1)
    console.log(links);
}

/////////////////////// playlist display
function relod() {
  for (let i = 0; i < links.length; i++) {
    var body = document.getElementById("body");
    var div = document.createElement("div");
    div.setAttribute("class", "div" + i);
    var ifram = document.createElement("iframe");
    ifram.setAttribute("class", "frame" + i);
    ifram.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videos.items[links[i]].id.videoId}`
    );
    div.appendChild(ifram);
    body.appendChild(div);
    // HEADDIN TITLE SNIPPETS ETC

    var div_snippet = document.createElement("div");
    div_snippet.setAttribute("class", "divS" + i);
    div_snippet.setAttribute("style", "font-size:12px;");

    var title = document.createElement("h2");
    div_snippet.appendChild(title);
    title.textContent = videos.items[links[i]].snippet.title;

    var pub_time = document.createElement("h3");
    pub_time.textContent =
      "PUBLISHED ON:- " + videos.items[links[i]].snippet.publishedAt;
    div_snippet.appendChild(pub_time);

    var channel_title = document.createElement("h3");
    channel_title.textContent =
      "CHANNEL TITLE:- " + videos.items[links[i]].snippet.channelTitle;
    div_snippet.appendChild(channel_title);

    var play = document.createElement("button");
    play.textContent = "Delete from PlayList";
    play.setAttribute("onClick", "delete1("+i+")");
    div_snippet.appendChild(play);
    
    body.appendChild(div_snippet);
}
}
