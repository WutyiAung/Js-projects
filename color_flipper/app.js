var colors =[ "rgba(133,122,200)", "#f15025","#5a989e","#065535","#c5d97a"];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");

function getRandomNumber(){
  var n = Math.floor(Math.random()*colors.length);
  return n ;
}
btn.addEventListener('click',function(){
  var randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})