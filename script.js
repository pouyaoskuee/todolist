let todos=[]
let default_value='all'

const todoinput = document.querySelector('.input');
const todoform = document.querySelector('.add__form');
const list = document.querySelector('.list__ul');
const sort = document.querySelector('.filter-todos');


todoform.addEventListener('submit', addf )
sort.addEventListener('change', (e)=>{
    default_value = e.target.value;
    sortchange()
})





function addf(e){
    e.preventDefault();
    if (!todoinput.value) return 'error' ;
    const newtodos = {
        id: Date.now(),
        created_at: new Date(),
        title: todoinput.value,
        isCompleted: false,
    }
    todos.push(newtodos);

    sortchange(todos)


    todoinput.value = '';

}



function addtodom(todos){
    let result = '';
    todos.forEach((item) => {
        result += `<li class="list__li">
            <p class="list__title ${item.isCompleted===true ? "completed":""} ">${item.title}</p>
            <span class="list__data">${(item.created_at).toLocaleDateString('fa-IR')}</span>
            <button type="button" data-todo-id=${item.id} class="check">&check;</button>
            <button type="button" data-todo-id=${item.id} class="remove">&times;</button>
        </li>`

    })
    list.innerHTML = result;
    const remove=document.querySelectorAll('.remove');
    remove.forEach((item)=>{
        item.addEventListener('click', taskremove);
    })

    const check=document.querySelectorAll('.check');
    check.forEach((item)=>{
        item.addEventListener('click' , taskcheck)
    })

}



function sortchange(){
    switch (default_value){
        case 'all':{
            addtodom(todos)
            break;
        }
        case 'completed':{
            const filtertodo=todos.filter((t)=>(t.isCompleted))
            console.log(filtertodo)
            addtodom(filtertodo)
            break;
        }
        case 'uncompleted':{
            const filtertodo=todos.filter((t)=>(!t.isCompleted))
            console.log(filtertodo)
            addtodom(filtertodo)
            break;

        }
        default: addtodom(todos)
    }

}


function taskremove(e){
    e.preventDefault();
    const btnid= Number(e.target.dataset.todoId);
    const filtered=todos.filter((t)=>(t.id!==btnid))
    todos=filtered
    sortchange(todos)
}



function taskcheck(e){
    e.preventDefault();
    const btnid= Number(e.target.dataset.todoId);
    const todo = todos.find((t)=>(t.id===btnid))
    todo.isCompleted=!todo.isCompleted;
    sortchange(todos)
}





