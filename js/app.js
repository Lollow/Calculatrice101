
var a = 5
var b = 29
function addition (a, b){
	console.log(a + b);
}

addition(a, b);

function soustraction (a, b){
	console.log(a + b);
}

soustraction(a, b);

function multiplication(a, b){
	console.log(a * b);
}

multiplication(a, b);

function division (a, b){
	if( b > 0){
		console.log(a / b);
	}else if (b <= 0){
		console.log("Can't divide by 0")
	}
}

division(a, b);
division (3, 0);