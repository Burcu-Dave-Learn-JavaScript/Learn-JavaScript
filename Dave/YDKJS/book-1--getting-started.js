// important points learned in book 1 "Getting Started" 2nd Edition

// scope of variables
var adult = true;

if (adult) {
    var myName = "Kyle";
    let age = 39;
    console.log("Shhh, this is a secret!");
}
console.log(myName);
// Kyle
console.log(age);
// Error!

// var has wider scope - using 'let' means scope is confined to where it was defined
// const is leike let but for values you dont want ot change
// becuase of this its best ot use const with primaitve values - not objects or arrays 
// - as it is harder to control not changing these types of values

///////////////////////////
///////////////////////////
///////////////////////////

// FUNCTIONS

//Types of functions:
//Example 1
function awesomeFunction(coolThings) {
    // ..
    return amazingStuff;
}
// this is a function DECLARATION - as it is declared on its own - its not part of an expression in another statement

//Example 2:
var awesomeFunction = function(coolThings) {
    // ..
    return amazingStuff;
};
// this is a function EXPRESSION - see how it is assigned to a variable

// the key to functions in JS is that they are value types - just like numbers string etc - becuase of this they
// can be used as properties inside object, e.g.
var whatToSay = {
    greeting() {
        console.log("Hello!");
    }
};

whatToSay.greeting();
// Hello!

////////////
// CLASSES in JS
// you can actually write JS in an OOP way, e.g.:
class Notebook {
    constructor() {
        this.pages = [];
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");

// not how we have constructors and use the new keyword!

// you can even have OO goodies such as inheritance and polymoprhism
// e.g.
class Book extends Publication { 
// ...
}

// it is more common to see the module (function) pattern like we learn about in most tutorials - however the 'class'
// pattern is becoming more popular
// even though - in reality the class and classis module patterns differ very little - only in how the objects are named







