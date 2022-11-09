var shapes = new Image();
shapes.src = "images/shapes.png";

shapes.onload = function(){
    ctx.drawImage(shapes, 800,800,0,0)
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";

ctx.fillRect(84,300,100,100);
ctx.strokeRect(84,300,100,100);

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.arc(385,441,66,0,(3 * Math.PI));
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "00ffff";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(556,308);
ctx.lineTo(666,283);
ctx.lineTo(723,378);
ctx.lineTo(650,464);
ctx.lineTo(547,420);
ctx.lineTo(556,308);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rbg(32,32,32)";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(636,495);
ctx.lineTo(667,551);
ctx.lineTo(734,567);
ctx.lineTo(687,615);
ctx.lineTo(696,682);
ctx.lineTo(636,653);
ctx.lineTo(575,681);
ctx.lineTo(584,615);
ctx.lineTo(537,566);
ctx.lineTo(606,553);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(278,549);
ctx.lineTo(86,681);
ctx.stroke();

ctx.strokeStyle = "rgb(255,0,0)"
ctx.lineWidth = 5