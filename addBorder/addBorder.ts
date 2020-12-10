function addBorder(picture) {
	const star = '*'.repeat(picture[0].length + 2);
	picture.push(star);
	picture.unshift(star);

	for (let i = 1; i < picture.length - 1; i++) {
		picture[i] = '*'.concat(picture[i], '*');
	}
	return picture;
}

console.log(addBorder(['abc', 'ded']));
