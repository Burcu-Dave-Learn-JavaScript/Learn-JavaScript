// 1. STORING ITEMS

var todos = ['item 1', 'item 2', 'item 3']; // an array in js - note how its more common is js to use single quotes for strings, although you can also use double quotes

// 2. DISPLAY AN ITEM

console.log('My Todos:', todos); // console.log prints info to a browsers console window

// 3. ADDING AN ITEM

todos.push('item 4'); // push adds an item to the END of an array

//todos // just writing the word todos directly in the console window will print out all the todos array items - the same as console.log - as we are not in console here I just commented it out

// 4. CHANGING AN ITEM

console.log(todos[0]); // this prints the first item of the array - arrays are zero based.

todos[0] = 'item 1 updated';

console.log(todos[0]);

// 5. DELETING AN ITEM

console.log(todos);

todos.splice(0, 1); // splice(item to start deleting at, how many items to remove)

console.log(todos);
