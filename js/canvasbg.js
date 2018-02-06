



function draw(){
var canvas = document.getElementById("canvas");
if (canvas.getContext) {
	var ctx = canvas.getContext("2d");


var w = $(window).width()/1.3;
alert(w);

canvas.width = 1000;
canvas.height = 430;

var triangleMenu = new Image();
triangleMenu.src = "space.png";


var spriteWidth  = w,
    spriteHeight = 430,
    pixelsLeft   = 0,//(1 frame every 320px)
    pixelsTop    = 0,
    canvasPosX   = 0,
    canvasPosY   = 0;


triangleMenu.onload = function(){
  ctx.drawImage(triangleMenu,
  pixelsLeft,
  pixelsTop,
  spriteWidth,
  spriteHeight,
  canvasPosX,
  canvasPosY,
  spriteWidth,
  spriteHeight);
};  



}





}

