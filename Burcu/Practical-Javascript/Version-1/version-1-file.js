//It should have a place to store todos
var todos = ["item1", "item2", "item3"]
//It should have a way to display todos
console.log("My todos:", todos);
//It should have a way to add new todos
todos.push("item4");
//It should have a way to change a todo
todos[0]="changed item"
//It should have a way to delete a todo
todos.splice(0,1); //starting from 0 index, 1 number of elements