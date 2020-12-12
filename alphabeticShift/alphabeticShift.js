function alphabeticShift(inputString) {
	const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	let newWord = '';
	for (let i = 0; i < inputString.length; i++) {
		let idxCount = 0;
		if (alphabet.indexOf(inputString[i]) === 25) {
			newWord += alphabet[idxCount];
		} else {
			idxCount = alphabet.indexOf(inputString[i]);
			newWord += alphabet[idxCount + 1];
		}
	}
	return newWord;
}

console.log(alphabeticShift('crazy'));
