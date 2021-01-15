function findOppositeNumber(n, inputNumber) {
	var result = 0;
	var i = inputNumber;
	
	if (i < n / 2) {
			result = i + n / 2
			console.log(result)
	} else {	
			result = i - n / 2
			console.log(result)
	}
	return result;
}

console.log(`findOppositeNumber(10, 2) = ${findOppositeNumber(10, 2)}`);
console.log(`findOppositeNumber(10, 6) = ${findOppositeNumber(10, 6)}`);