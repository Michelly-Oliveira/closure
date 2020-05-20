function outerFunction() {
	// Create a variable on the scope of outerFunction
	let a = 2;

	function innerFunction() {
		// InnerFunction has scope closure over the scope of outerFunction
		// It has access to all variables declared within outerFunction
		// the inner function preserves the scope chain(own, outer, global) of the enclosing function at the time the enclosing function was executed, and thus can access the enclosing function’s variables.
		console.log(
			`Inside innerFunction, showing the variable from the outerFunction: ${a}`
		);
	}

	// Return the function object innerFunction references
	return innerFunction;
}

// Assign the value outerFunction returned to the variable
let callInnerFunction = outerFunction();
// Invoke the variable callInnerFunction, which is invoking innerFunction
callInnerFunction();
