
    function addTask() {
       var taskInput = document.querySelector("#task") ;
       var task = taskInput.value ;

       var taskList = document.querySelector("#taskList"); //ul

       var taskItem = document.createElement("li") ; //li
       taskItem.textContent = task ;

       taskList.appendChild(taskItem);
       taskInput.value ='';
       
    }
