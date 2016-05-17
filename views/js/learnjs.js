//use jquery
// var $ = require("jquery");

// my code

var x = myFirst(4, 3)


document.getElementById("function").innerHTML = x;
console.log('consolo ok');


//function
function myFirst(a, b) {
      console.log('function ok');
      return a * b;
}


// Objects are variables too. But objects can contain many values.
var shoe = {
      type: "snaker",
      model: "running",
      color: "colorful"
};
document.getElementById("objects").innerHTML = shoe.model;


// Objects part 2
var person = {
      firstname: "huang",
      skill: "web_design",
      lastname: "bryan"
}
document.getElementById("person").innerHTML = person.firstname + "/" + person.lastname;
console.log('Objects ok');


//String Methods

var text = "primitive values as objects when executing methods and properties"
document.getElementById("text").innerHTML = text.length
console.log('String Methods ok');
// var text = "primitive values as objects when executing methods and properties"
// document.getElementById("text1").innerHTML = text.length




//-----------------
//  this
//-----------------

//01
var obj = {
      x: 20,
      f: function() {
            console.log(this.x);
      }
};
obj.f();

//02
var x = 10;
var y = 30;
var f = function(){
	console.log(this.x);
      console.log(this.y);
};

f();

//-----------------
//  javascript hack
//-----------------
