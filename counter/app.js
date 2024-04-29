var count = 0 ;
var value = document.querySelector("#value");
var btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
 btn.addEventListener("click",function(e){
   var styles = e.currentTarget.classList ;
   if(styles.contains("increase")){
        count++ ;
   } else if (styles.contains("decrease")){
       count-- ;
   } else {
      count = 0;
   }
   value.textContent = count ;

   if(count > 0 ){
    value.style.color = "green" ;
   } else if (count < 0){
    value.style.color = "red";
   } else {
    value.style.color = "black" ;
   }
 })
})
