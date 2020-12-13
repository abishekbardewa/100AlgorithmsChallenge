function addTwoDigits(n) {
	let nStr = n.toString().split('');
	const sum = nStr.reduce((acc, val) => {
		return parseInt(acc) + parseInt(val);
	}, 0);
	return sum;
}

console.log(addTwoDigits(29));
