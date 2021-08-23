const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	if (mathSymbol === "+"){
		console.log(num1 + num2)
	}
	if (mathSymbol === "-"){
		console.log(num1 - num2)
	}
	if (mathSymbol === "*"){
		console.log(num1 * num2)
	}
	if (mathSymbol === "/"){
		console.log(num1 / num2)
	}
	if (mathSymbol === "sqrt"){
		let sqrt = Math.sqrt(num1);
		console.log("The Square Root of ", num1, "is ", sqrt)
	}
	if (mathSymbol === "pow"){
		let pow = Math.pow(num1,2);
		console.log("The Square of", num1, "is ", pow)
	}
	if (mathSymbol === "cubbed"){
		let cubbed = Math.pow(num1,3);
		console.log("The ", num1, "cubbed is ", cubbed)
	}
	//Remainder not yet working
	if (mathSymbol === "%"){
		console.log(num1 % num2)
	}
	// This line closes the connection to the command line interface.
	reader.close()

});


