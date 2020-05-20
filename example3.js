// global scope
let e = 10;

function sum(a) {
	return function (b) {
		return function (c) {
			// outer functions scope
			return function (d) {
				// local scope
				return a + b + c + d + e;
			};
		};
	};
}

console.log(sum(1)(2)(3)(4)); // log 20

// You can also write without anonymous functions:

function sum(a) {
	return function sum2(b) {
		return function sum3(c) {
			// outer functions scope
			return function sum4(d) {
				// local scope
				return a + b + c + d + e;
			};
		};
	};
}

// return function sum2(b)
let s = sum(1);
// return function sum3(c)
let s1 = s(2);
// return function sum4(d)
let s2 = s1(3);
// return a + b + c + d + e
let s3 = s2(4);
console.log(s3); //log 20

/*
    Closure Scope Chain:
    * Local Scope(own scope)
    * Outer Functions Scope
    * Global Scope
    
    * closures have access to ALL outer function scopes 
*/
