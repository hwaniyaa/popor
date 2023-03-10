window.onload = function(){
  let bgVideoTxtLeft = document.querySelector(".bg-video--txt-left");
  let bgVideoTxtRight = document.querySelector(".bg-video--txt-right");
  let musicVideoSubVideo = document.querySelector(".music-video--subVideo img");
  let weAreMaveBg = document.querySelector(".we-are-mave--bg img");

  let x = 0;
  let y = 0;
  let speed = 0.008;

  let mx = 0;
  let my = 0;

  window.addEventListener("mousemove", mouseFunc, false)

  function mouseFunc(e){
    x = (e.clientX - window.innerWidth / 2);
    y = (e.clientY - window.innerHeight / 2);

    loop();
  }

  function loop(){
    mx += (x - mx) * speed;
    my += (y - my) * speed;
    bgVideoTxtLeft.style.transform = "translate("+ (mx/50)+"px, "+ -(my/50)+"px )";
    bgVideoTxtRight.style.transform = "translate("+ (mx/45)+"px, "+ -(my/45)+"px )";
    musicVideoSubVideo.style.transform = "translate("+ (mx/25)+"px, "+ (my/25)+"px )";
    weAreMaveBg.style.transform = "translateX("+ (mx/25)+"px)";

    window.requestAnimationFrame(loop);
  }


}