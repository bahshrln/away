var sound1 = 'mySound';

var timeout = "";

var timeout2 = "";
var timeout3 = "";
var timeout4 = "";

var level = 1;

var counter = 0;

//options for bells
window.addEventListener(
  "load", function(){
    //option1
    document.getElementById("full-screen-menu-toggle").addEventListener(
      "click", toggle);
    //stop sound and overlay by click
    document.getElementById("overlay").addEventListener(
      "click", stop)
});

var fade = function() {
  if (level>=0) {
    level-=0.0035;
    timeout3 = setTimeout(fade,100);
    timeout5 = setTimeout(stop,30000);
    document.getElementById("overlayimg").style.opacity = level;
  }
}

var fade2 = function() {
  if(level<0.3){
    level=0.8;
  }
  document.getElementById("overlayimg").style.opacity = level;
}

var stop = function() {
  document.getElementById("overlayimg").style.display = "none";
  clearTimeout(timeout2);
  clearTimeout(timeout3);
  soundManager.stop(sound1);
  document.getElementById("bell-icon").setAttribute("src", "img/gloeckchen_icon.png");
}

var start = function(){
  //start overlay-video
  document.getElementById("overlayimg").style.display ="block";
  document.getElementById("bell-icon").setAttribute("src", "img/x_icon.png");

  document.getElementById("overlayimg").setAttribute("src", "img/ZfF_Glockengeläut_Marktkirche.jpg");
  fade();
  soundManager.url = 'soundmanager2.js';

  soundManager.onready(
    function() {
      soundManager.createSound({
          id: sound1,
          url: './media/hannover_marktkirche.mp3'
      });

      //play and timeout after 30 sec
      sound = sound1;
      soundManager.play(sound1);
      timeout2 = setTimeout(
        function(){
          //document.getElementById("overlayimg").setAttribute("src", "img/ZfF_Glockengeläut_Marktkirche_Schluss.jpg");
          soundManager.stop(sound1); clearTimeout(timeout3); clearTimeout(timeout2);

      }, 30000);

      timeout4 = setTimeout(
        function(){
          document.getElementById("overlayimg").setAttribute("src", "img/ZfF_Glockengeläut_Marktkirche_Schluss.jpg");
          fade2();
          clearTimeout(timeout4);
      }, 25000);

    });
}

var toggle = function (){
  if(document.getElementById("bell-icon").getAttribute("src")=="img/gloeckchen_icon.png" ){
      start();
    }
    else if(document.getElementById("bell-icon").getAttribute("src")=="img/x_icon.png" ){
      stop();
    }
}

