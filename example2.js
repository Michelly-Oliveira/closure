// makeAdder takes a single argument and returns a new function.
// The function it returns takes a single argument, and returns the sum of x and y
function makeAdder(x) {
	// add5 and add10 =
	return function (y) {
		return x + y;
	};
}

// add5 and add10 have the same function body but different lexical environments
// add5 = x is 5
let add5 = makeAdder(5);
// add10 = x is 10
let add10 = makeAdder(10);

// y is 2
// return 5 + y
console.log(add5(2));
// return 10 + y
console.log(add10(2));
