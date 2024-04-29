var hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var color = document.querySelector(".color");
var btn = document.getElementById('btn');

btn.addEventListener('click',function(){
   var hex = "#";
   for(var i=0 ; i<6 ; i++){
    hex += hexColors[getRandomNumer()]; //#A1256B(eg)
   }
   document.body.style.backgroundColor = hex ;
   color.textContent = hex ;
})
function getRandomNumer(){
    var n = Math.floor(Math.random()*hexColors.length);
    return n;
}