function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  function enable(){
    if(scrollY>250){
        document.getElementById("head").style.backgroundColor="rgba(110, 110, 110, 0.582)";
        document.getElementById("head").style.backdropFilter="blur(5px)";
        console.log("scrolling");
    }
    if(scrollY<250){
        document.getElementById("head").style.backgroundColor="";
        document.getElementById("head").style.backdropFilter="blur(0px)";
    }
  }
  window.addEventListener("scroll", reveal);

  window.addEventListener("scroll",enable);


var image = document.querySelectorAll(".mg");
var id = setInterval(slide,3000);
var cnt=0,prev=0;
function slide(){
  if(cnt==4){
    cnt=0;
  }
  switch(cnt){
    case 0:image[prev].classList.remove("slide");
           image[cnt].classList.add("slide");
           prev=cnt;
           cnt++;
           break;
    case 1:image[prev].classList.remove("slide");
           image[cnt].classList.add("slide");
           prev=cnt;
           cnt++;
           break;
    case 2:image[prev].classList.remove("slide");
           image[cnt].classList.add("slide");
           prev=cnt;
           cnt++
           break;
    case 3:image[prev].classList.remove("slide");
            image[cnt].classList.add("slide");
            prev=cnt;
            cnt++
            break;
  }
  // if(cnt==1){
  //   image[cnt-1].classList.remove("slide");
  //   image[cnt].classList.add("slide");
  //   cnt=0;
  // }
  // else{
  //   image[cnt].classList.add("slide");
  //   image[cnt+1].classList.remove("slide");
  //   cnt=1;
  // }
  
}

window.onscroll = function () {
  scrollRotate();
};


var x = document.getElementsByTagName("video");
x.autoplay = true;
x.load();