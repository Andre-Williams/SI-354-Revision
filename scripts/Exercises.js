//Function
//Q1
function RevNumber(Num){
	revnum = Num.toString().split("").reverse().join("")
	return Number(revnum)
}

//Q2
function palindrome(phrase){
	noSpaces = phrase.replace(" ", "").split("").join("");
	RevPhrase = noSpaces.split("").reverse().join("");
	if (noSpaces === RevPhrase) {
		return phrase + ":" + " " + "is a palindrone" ;
	}else{
		return phrase + ":" + " " + "is not a palindrone" ;
	}
}

//Q3

//Q4
function StrSort(Str){
	return Str.split("").sort().join("");
}

//Conditional Statements and Loops
//Q1
function Larger(num1, num2){
	if (num1>num2){
		return num1 + " " + "is larger";
}else if (num1 === num2){
	return num1 + " " + "and" + " " + num2 + " " + "are equal";
}else{
	return num2 + " " + "is larger";
}
}

//Q2
function sign(num1, num2, num3){
	var num = num1 * num2 * num3;
	var numList = num.toString().split("");
	if (numList[0] === "-"){
		alert("The sign is -");
	}else{
		alert("The sign is +");
	}

}

//Q3
function DecSort(num1,num2,num3){
	if (num1>num2 && num1>num3){
		if (num2>num3){
			return num1, num2, num3;
		}else{
			return num1, num3, num2
		}

	}else if (num2>num1 && num2>num3){
		if (num1>num3){
			return num2, num1, num3;
		}else{
			return num2, num3, num1;
		}

	}else if(num3>num1 && num3>num2){
			if (num1>num2){
				return num3, num1, num2;
			}else{
				return num3, num2, num1;
			}
		}
	}

//Q5
let counter = 0;

while (counter <16){
	if (counter%2 === 0){
		console.log(counter, "is even");
		counter++;
	}else{
		console.log(counter, "is odd");
		counter++;
	}
}


//Q10
let x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';
}


//Asynchronous Programming
//Example 1:
function countdown() {
	console.log("Countdown:");
	for(let i=5; i>=0; i--) { // i is now block-scoped
		setTimeout(function() {
			console.log(i===0 ? "GO!" : i);
		}, (5-i)*1000);
	}
}
countdown();

//Example 2:
