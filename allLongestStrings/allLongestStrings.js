function allLongestStrings(inputArray) {
	let largestLength = 0;
	const newArr = [];
	inputArray.forEach((ele) => {
		largestLength = largestLength < ele.length ? ele.length : largestLength;
	});

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i].length === largestLength) {
			newArr.push(inputArray[i]);
		}
	}
	return newArr;
}

console.log(allLongestStrings(['aa', 'aba', 'ad', 'vcd', 'aba']));
