var display = document.getElementById("display") ;

function appendToDisplay(value){
  display.value += value ;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    var expression = display.value ;
    var result ;
    try {
      result  = eval(expression) ;
    } catch (error) {
      result = 'Error'
    }
  
    display.value = result ;
}