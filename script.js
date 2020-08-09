document.getElementById('start').onclick = function(){
var start = new Date().getTime();
var bestTime = 1000;
function randomColor(){
  var c = "0123456789ABCDEF".split("");
  var p ="#";
  for (var i=0;i<6;i++){
    p = p+c[Math.floor(Math.random()*16)];
  }
  return p;
}
function display(){
  var x = Math.random()*400 + 50;
  var t = Math.random()*400 + 10;
  var l = Math.random()*1500 + 10;
  if (Math.random()<0.5){
    document.getElementById('fig').style.borderRadius = "50%";
  }
  else{
    document.getElementById('fig').style.borderRadius = "0";
  }
  document.getElementById('fig').style.backgroundColor = randomColor();
  document.getElementById('fig').style.top = t+"px";
  document.getElementById('fig').style.left = l+"px";
  document.getElementById('fig').style.width = x+"px";
  document.getElementById('fig').style.height = x+"px";
  document.getElementById('fig').style.display = "block";
  start = new Date().getTime();
}
setTimeout(display,Math.random()*2000);

document.getElementById('fig').onclick = function(){
  var end = new Date().getTime();
  var time = (end-start)/1000;
  if(time<bestTime){
    document.getElementById('bt').innerHTML = time+" sec";
    bestTime = time;
  }
  document.getElementById('tt').innerHTML = time+" sec";
  document.getElementById('fig').style.display = "none";
  setTimeout(display,Math.random()*2000);
}
}
document.getElementById('reset').onclick = function(){
document.getElementById('tt').innerHTML = "Not started";
document.getElementById('bt').innerHTML = "Not started";
bestTime = 1000;
document.getElementById('fig').style.display = "none";
}
