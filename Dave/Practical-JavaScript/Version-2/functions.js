// the function
//function makeSandwichWith(filling){
    //part 1;
    //add filling;
    //part 3;
//}

// calling the function
///makeSandwichWith('ham')

// to see below code running copy and paste into a browser console window

var todos = ['item 1', 'itme 2', 'item 3'];

function displayTodos()
{
    console.log('My Todos:', todos);
}

function addTodo(todo)
{
    todos.push(todo);
    displayTodos();
}
//addTodo('new item');

function changeTodo(index, newValue)
{
    todos[index] = newValue;
    displayTodos();
}
//changeTodo(0, 'new todo');

function deleteTodo(index)
{
    todos.splice(index, 1);
    displayTodos();
}
//deleteTodo(0);
