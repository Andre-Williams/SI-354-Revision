//Objects
//A JavaScript object is a collection of properties where each property has a name and a value, similar to Hash, Map, or Dictionary in other languages.
var rect = {};          // creates an empty object
rect.width = 20;
rect.height = 10;
alert(rect.width);      // => 20
alert(rect.height);     // => 10

//Alternative
var rect = { width: 20, height: 10 };
alert(rect.width);      // => 20
alert(rect.height);     // => 10

//objects are mutable
var rect = { width: 20, height: 10 };
rect.width = 30;        // => modify value 
alert(rect.width);      // => 30
alert(rect.height);     // => 10

//Property values are not limited to primitive types, like number or string; you can also add properties that 
//are other objects, including functions. When a function is added to an object it is called a method.
var rect = { width: 20, height: 10 };
// add new object
rect.color = { red: 0, green: 255, blue: 128 }; 
// add new method
rect.getArea = function() {                    
    return this.width * this.height;
};
alert(rect.color.red);             // => 0
alert(rect.color.green);           // => 255
alert(rect.color.blue);            // => 128
alert(rect.getArea());             // => 200