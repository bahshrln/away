var timeout2 = "";
var timeout3 = "";
var level = 1;

//options for bells
window.addEventListener(
  "load", function(){

    //option1
    document.getElementById("full-screen-menu-toggle").addEventListener(
      "click", toggle);

    document.getElementById("overlay").addEventListener(
      "click", stop);
});

var fade = function() {
  if (level>=0) {
    level-=0.0035;
    timeout3 = setTimeout(fade,100);
    //timeout5 = setTimeout(stop,21000);
    document.getElementById("overlayimg").style.opacity = level;
  }
}

var stop = function() {
  document.getElementById("overlayimg").style.opacity = 0;
  clearTimeout(timeout2);
  clearTimeout(timeout3);
  document.getElementById("overlay").innerHTML ="";
  document.getElementById("bell-icon").setAttribute("src", "img/gloeckchen_icon.png");
}

var start = function(){
  //start overlay-video
  document.getElementById("overlay").innerHTML ="<video id=\"overlayimg\" src=\"media/ZfF_Glockengeläut_Marktkirche.mp4\" autoplay>Ihr Browser kann dieses Video nicht wiedergeben.<br/>Sie können ihn unter <a href=\"#\">Link-Addresse</a> abrufen.</video>";
  document.getElementById("overlayimg").style.display ="block";
  document.getElementById("bell-icon").setAttribute("src", "img/x_icon.png");
  if(document.getElementById("bell-icon").getAttribute("src")=="img/x_icon.png"){
    document.getElementById("bell-icon").removeEventListener(
    "click", start);
    document.getElementById("bell-icon").addEventListener(
    "click", stop);
  }
  timeout4 = setTimeout(fade, 20000);
  timeout2 = setTimeout(
      function(){
        document.getElementById("overlay").innerHTML ="";
        document.getElementById("bell-icon").setAttribute("src", "img/gloeckchen_icon.png");
        clearTimeout(timeout3); clearTimeout(timeout2);
    }, 35000);
}

var toggle = function (){
  if(document.getElementById("bell-icon").getAttribute("src")=="img/gloeckchen_icon.png" ){
      start();
    }
    else if(document.getElementById("bell-icon").getAttribute("src")=="img/x_icon.png" ){
      stop();
    }
}
