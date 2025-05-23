//for the GIF banner
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) 
{
  showSlides((slideIndex += n));
}

function currentSlide(n) 
{
  showSlides((slideIndex = n));
}

function showSlides(n) 
{
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}  

  if (n < 1) {slideIndex = slides.length}

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

let memberIntroNo = 0;
memberDetails(memberIntroNo);

function memberDetails(n)
{
  memberIntroNo = n;
  showIntro(memberIntroNo);
}

function showIntro(n)
{
  let intro = document.getElementsByClassName("member_Description");
  for (var i =0; i<intro.length;i++)
  {
    intro[i].style.display = "none";
  }
  intro[n].style.display = "flex";
  console.log(intro);
}

// randomised background
function randombg()
{
  var randomImages = ["url('randomBackgroundIMages/marshmello.jpeg')","url('randomBackgroundIMages/amongUsLefo.jpeg')","url('randomBackgroundIMages/cameraStand.jpeg')","url('randomBackgroundIMages/dementia.jpeg')","url('randomBackgroundIMages/feet.jpeg')","url('randomBackgroundIMages/jpHouseHangout.jpeg')","url('randomBackgroundIMages/messyFood.jpeg')","url('randomBackgroundIMages/payToAdip.jpeg')","url('randomBackgroundIMages/polyEndBBQ.jpeg')","url('randomBackgroundIMages/swimming.jpeg')"];
    var rando1 = Math.floor(Math.random()*10);
    var bgImg1 = randomImages[rando1];
    var rando2 = Math.floor(Math.random()*10);
    var bgImg2 = randomImages[rando2];
  let aboutUs = document.getElementById("aboutUs"); 
  aboutUs.style.background = bgImg1;
  let member = document.getElementById("membersWhole");
  member.style.background = bgImg2;
  aboutUs.style.backgroundRepeat ="no-repeat";
  aboutUs.style.backgroundPositionY = "36%";
  aboutUs.style.backgroundSize ="cover";
  member.style.backgroundRepeat ="no-repeat";
  member.style.backgroundSize ="cover";
}