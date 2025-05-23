// to display different articles from different years
let articlePage = 0;
showArticlePage(articlePage);


function plusArticles(n) {
  showArticlePage(articlePage += n);
}


function currentPage(n) {
  showArticlePage(articlePage = n);
}

function showArticlePage(n) {
  let page = document.getElementsByClassName("myArticlePage");
  let dot = document.getElementsByClassName("dot");
    console.log(page);
  if (n > page.length) {articlePage = 0}
  if (n < 0) {articlePage = page.length}

  for (let i = 0; i < page.length; i++) {
    page[i].style.display = "none";
    dot[i].style.border = "none";
    dot[i].style.color = "rgba(250,250,250,0.8)"
  }

  dot[articlePage].style.border = "solid";
  dot[articlePage].style.borderColor = "white"
  dot[articlePage].style.color = "white"
  page[articlePage].style.display = "flex";

}

// randomised background
function randombg()
{
  var randomImages = ["url('randomBackgroundIMages/marshmello.jpeg')","url('randomBackgroundIMages/amongUsLefo.jpeg')","url('randomBackgroundIMages/cameraStand.jpeg')","url('randomBackgroundIMages/dementia.jpeg')","url('randomBackgroundIMages/feet.jpeg')","url('randomBackgroundIMages/jpHouseHangout.jpeg')","url('randomBackgroundIMages/messyFood.jpeg')","url('randomBackgroundIMages/payToAdip.jpeg')","url('randomBackgroundIMages/polyEndBBQ.jpeg')","url('randomBackgroundIMages/swimming.jpeg')"];
    var rando1 = Math.floor(Math.random()*10);
    var bgImg1 = randomImages[rando1];
    // var rando2 = Math.floor(Math.random()*10);
    // var bgImg2 = randomImages[rando2];
  let aboutUs = document.getElementById("backgrunnd"); 
  aboutUs.style.background = bgImg1;
  aboutUs.style.backgroundRepeat ="no-repeat";
  aboutUs.style.backgroundPositionY = "36%";
  aboutUs.style.backgroundSize ="cover";
  // member.style.backgroundRepeat ="no-repeat";
  // member.style.backgroundSize ="cover";
}