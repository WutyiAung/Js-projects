function saveTasksToLocalStorage(tasks){
   localStorage.setItem('tasks' , JSON.stringify(tasks));
}

function getTasksFromLocalStorage(){
    var tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

function addTask(){
 var taskInput = document.getElementById("taskInput") ;
 var taskValue = taskInput.value.trim();
 if(taskValue === ''){
    alert('please enter a task');
 } else {
    var tasks = getTasksFromLocalStorage('tasks');
    tasks.push(taskValue);
    saveTasksToLocalStorage(tasks);
    displayTasks();
 }
 taskInput.value = '';

}
 
function removeItem(){
    localStorage.removeItem('tasks');
    displayTasks();
}

// Function to display tasks
function displayTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    var tasks = getTasksFromLocalStorage();
   
    tasks.forEach(function(task) {
        var li = document.createElement('li'); //create li
        li.textContent = task;
        taskList.appendChild(li);
    });
}

displayTasks();

