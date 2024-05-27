const todolist=[{
    name:'make dinner',
    dueDate:'2022-12-22'
},{
    name:'wash dishes',
    dueDate:'2022-12-22'
}];
renderTodolist();

function renderTodolist(){


let todolistHTML='';
for(let i=0;i<todolist.length;i++){
    const todoObject=todolist[i];
    const name=todoObject.name;
    const dueDate=todoObject.dueDate;
    const html=`<div>${name}</div> <div>${dueDate} </div> <button onclick="todolist.splice(${i},1);renderTodolist();" class="delete-todo-button">Delete</button>`;

    todolistHTML+=html;

}


document.querySelector('.js-todo-list')
    .innerHTML=todolistHTML;

}


function addtodo(){
    const inputElement=document.querySelector('.js-name-input');
    const name=inputElement.value ;

    const dateInputElement=document.querySelector('.js-due-date-input');
    const dueDate=dateInputElement.value;
    
    todolist.push({
        name:name,
        dueDate:dueDate
    }

    );
   
    inputElement.value="";

    renderTodolist();
}