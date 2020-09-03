//V2 

// It should have a function to display todos
function displayTodos (todos){
    console.log('My todos: ' , todos);
}

// It should have a function to add todos
function addTodos (todos, newTodos){
    todos.push(newTodos);
    displayTodos(todos);
}

// It should have a function to change todos
function changeTodos(todos, position, newValue){
    todos[position] = newValue;
    displayTodos(todos);
}

// It should have a function to delete todos
function deleteTodo (todos, position){
    todos.splice(position,1);
    displayTodos(todos);
}

//---//

var todos = ['item1', 'item2','item3']

displayTodos(todos)
addTodos(todos, 'new todo')
changeTodos(todos, 0, 'new item1')
deleteTodo(todos, 0, 1)