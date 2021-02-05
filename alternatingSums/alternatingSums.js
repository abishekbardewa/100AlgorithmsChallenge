function alternatingSums(arr) {
	const sumsArr = [0, 0];
	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) {
			sumsArr[0] += arr[i];
		} else {
			sumsArr[1] += arr[i];
		}
	}
	return sumsArr;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
