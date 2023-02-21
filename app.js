const input= document.getElementById("input");
const button= document.getElementById('button');
let taskList= document.getElementById('tasks')
const error=document.getElementById('error')
const reset=document.getElementById('reset')

//function to addTask(main function)

function addTask(){
    if(input.value===""){
        // adding error message and css class when there is no input

        error.innerText="please add task to do"
        error.classList.add('error-active')
    }
    if(input.value){
        // removing error when input value is avaible

        error.innerText="";
        error.classList.remove('error-active');

        //calling const varible of list as "li" in "ul" and inside there will be listText consist of task and deleteBtn which to delete that task

        const list = document.createElement("li");
        const listText= document.createElement("div")
        const deleteBtn= document.createElement('button');

        //assinging listText to the input and adding delete button

        listText.innerText=input.value;
        deleteBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
        deleteBtn.type='button';

        //appending listText and deleteBtn to the List and eventually appending list (li) to taskList (ul)

        list.appendChild(listText);
        list.appendChild(deleteBtn);
        taskList.appendChild(list);
        
        //adding deleteTask funtion to delete task

        function deleteTask(){
            taskList.removeChild(list); 
        }

        //appling deleteTask function

        deleteBtn.addEventListener('click',deleteTask)

        //reseting all tasks

        function resetTasks(){
            taskList.removeChild(list);  
        }
        //add event to run resetTasks when clicked

        reset.addEventListener("click",resetTasks)

        //clearing input after appending

        input.value='';

       
    
}
}

//add event to run addTask when clicked

button.addEventListener('click',addTask)

//add event to run addTask when you entered in input

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      addTask();
    }
  });


