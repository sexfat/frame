(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
var f = function() {
      console.log(this.x);
      console.log(this.y);
};

f();

//-----------------
//  javascript Immediate Function  立即函示
//-----------------

(function() {
      var thisIsTemp = "abc";
}());
console.log('thisIsTemp');

//vs

var thisIsTemp = 'abc';

function a() {
      console.log('abc');
}

//找到 高度 要做垂直跟橫向都置中


// (function(){
//     console.log("test");
// })();

$(document).ready(function() {
      var outHeight = $('.ectage').height();
      var innnerHeight = $('.innersection').height();
      console.log('innersection:', innnerHeight + 'px');
      var result = (outHeight - innnerHeight) / 2;
      $('.ectage').css('padding-top', result);

});


$(document).ready(function() {
      var outHeights = $('.rect').height();
      var innnerHeights = $('.left').height();
      console.log('innersections:', innnerHeights + 'px');
      var results = (outHeights - innnerHeights) / 2;
      $('.left').css('padding-top', results);
});

},{}]},{},[1]);
