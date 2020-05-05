//// 3. OBJECTS
//// use curly braces for objects
//// example:

//var myComputer = {
//  operatingSystem: 'Windows',
//  screenSize: '15 inches',
//  purchaseYear: 2017
//};

//// call function
//myComputer;
//myComputer.operatingSystem;

// function in an object

var david = {
  name: 'David',
  sayName: function() {
    console.log(this.name);
  }
}

// a function on an object like this is called a "method"
// methods are usually anonymous -> i.e. notice how we do not name the function 
// -> we dont need one because we call it with the property name instead