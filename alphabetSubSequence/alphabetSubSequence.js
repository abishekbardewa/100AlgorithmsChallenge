function alphabetSubsequence(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i].charCodeAt(0) >= str[i + 1].charCodeAt(0)) {
			return false;
		}
	}
	return true;
}

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
