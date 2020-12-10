// function adjacentElementsProduct(inputArray) {
// 	let newArr = [];
// 	for (let i = 0; i < inputArray.length - 1; i++) {
// 		newArr.push(inputArray[i] * inputArray[i + 1]);
// 	}
// 	console.log(newArr);
// 	newArr.sort((a, b) => {
// 		return a - b;
// 	});
// 	return newArr[newArr.length - 1];
// }
//Other Solution
function adjacentElementsProduct(inputArray) {
	let largestProduct = inputArray[0] - inputArray[1];
	for (let i = 1; i < inputArray.length - 1; i++) {
		let product = inputArray[i] * inputArray[i + 1];
		largestProduct = largestProduct < product ? product : largestProduct;
	}
	return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
