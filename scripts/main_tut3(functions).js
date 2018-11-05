//Functions
//Piece of code that does one or more functions

function go(name, age){
	if (age<20){
		return name + "!";
	}else{
		return name + " , " + age;
	}
}

alert(go('Will', 34));
alert(go('Andre', 18));

function add(first, second){
	return first + second;
}

//var sum = add(1,2);
//alert(sum);
//alert(add(10, 5));
