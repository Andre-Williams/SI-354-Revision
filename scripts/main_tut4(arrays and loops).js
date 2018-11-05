//Arrays

var myList = ['apples', 'oranges', 'banannas'];

myList[3] = 'pineapples';
myList[0] = 'watermelon';
myList[4] = 34;

myList.shift() //removes first item from list
var currentFruit = myList.shift(); //Can also be used to pull first item out of list and assign it to another variable

myList.pop()//removes last item from list
var lastFruit = myList.pop();//Can also be used to pull last item out of list and assign it to another variable

alert(myList)
alert(currentFruit)
alert(lastFruit)

myList[2] = 'pineapples';
myList[3] = 'watermelon';

//Arrays can hold functions as well
//myList.length;	//gives length of list
//myList.push('avocado');  //Appends item to end of list
//myList.reverse();	//reverses the order of the array
//myList.sort();	//Sorts the order of the array

//Adding multiple elements to the end of an array
const arr = [1, 2, 3];
arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified

//Getting Sub arrays
const arr = [1, 2, 3, 4, 5];
arr.slice(3); // returns [4, 5]; arr unmodified
arr.slice(2, 4); // returns [3, 4]; arr unmodified
arr.slice(-2); // returns [4, 5]; arr unmodified
arr.slice(1, -2); // returns [2, 3]; arr unmodified
arr.slice(-2, -1); // returns [4]; arr unmodified

//Adding or removing element at any position
//The first argument is the index you want to start modifying; the second argument is the number of elements to remove (use 0 if you don’t want to remove any elements)
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]

//Cutting and Replacing Within an Array
//The first argument is where to copy to (the target), the second argument is where to start copying from, and the final (optional) argument is where to stop copying from.
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); // arr is now [1, 3, 4, 4]
arr.copyWithin(2, 0, 2); // arr is now [1, 3, 1, 3]
arr.copyWithin(0, -3, -1); // arr is now [3, 1, 1, 3]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Loops (while, for, do)
//Run a function on each of the items in the list (This is a new way of looping through a list. Older browsers may not have the "forEach" method)
myList.forEach(function(value, index){
	alert('I have ' + value + ' in my shopping bag')
})

var time = 0;
while (times < 10){
	console.log('tried it', times);
	times++; //Eqiuivalent to times = times + 1
}

//"do" loops (Same as "while", however, "do" is always going to run atleast 1 time and then check the condition. "whille" always checks the condition first.

do(){
	console.log('tried it', times);
	times++;
}while (times < 10);

//"for" loops. General formula = for (setup, comparison, change){}
var fruitList = ['Apples', 'Ornages', 'Banannas'];
for (var i = 0; i<fruitList.length; i++){
	console.log(fruitList[i]);
}