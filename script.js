const todos=[]

const todoinput = document.querySelector('.input');
const todoform = document.querySelector('.add__form');
const list = document.querySelector('.list__ul');


todoform.addEventListener('submit', addf )


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

    let result = '';
    todos.forEach((item) => {
        result += `<li className="list__li">
            <p className="list__title">${item.title}</p>
            <span className="list__data">${(item.created_at).toLocaleDateString('fa-IR')}</span>
            <button data-todo-id=${item.id} className="check">&check;</button>
            <button data-todo-id=${item.id} className="remove">&times;</button>
        </li>`
    })

    list.innerHTML = result;
    todoinput.value = '';

}



