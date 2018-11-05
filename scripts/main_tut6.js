//Tutorial 6
var num1 = document.getElementById("num-one");
var num2 = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

num1.addEventListener("input", add);
num2.addEventListener("input", add);

function add(){
	var one = parseFloat(num1.value) || 0; // parseFloat converts from "string" type to "number" type
	var two = parseFloat(num2.value) || 0; // the "||" = OR This means that if there is no value ther will automatically be a "0" assigned to the input
	var sum = one + two;
	addSum.innerHTML = "your sum is: " + sum;
}


//Javascript Events
//click
//mouseenter
//mouseleave
//mousedown
//mouseup
//mousemove
//keydown
//keyup
//blur
//focus
//input