function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
	// const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
	// const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
	// const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
	// const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
	// return yourWeakest === friendsWeakest && yourStrongest === friendsStrongest;

	return yourLeft + yourRight === friendsLeft + friendsRight && yourLeft * yourRight === friendsLeft * friendsRight;
}

console.log(areEquallyStrong(10, 15, 15, 10), true);
console.log(areEquallyStrong(15, 10, 15, 10), true);
console.log(areEquallyStrong(10, 10, 10, 10), true);
console.log(areEquallyStrong(15, 10, 15, 9), false);
console.log(areEquallyStrong(10, 5, 5, 10), true);
console.log(areEquallyStrong(1, 10, 10, 0), false);
console.log(areEquallyStrong(10, 5, 11, 4), false);
