# Closure

*closure is a JS feature* 
  * is created every time a function is created(function creation time)

__When an inner function has access to outside scope(from the enclosing function)__

```javascript
function outerFunction() {
    let a = 2;
    return function() {
        console.log(a);
    }
}

let callInnerFunction = outerFunction();
callInnerFunction(); // 2
```
- you define a function inside(inner function) another function(outer function), and return a reference to that inner function
- that way you can call the inner function by assigning the outer function call to a variable, and then calling that variable

---

Normally in JS when a function finishes executing its data(variables declared inside the function) ceases to exist. But with closures, that data continues to exist even after the function ends its execution.

The inner function maintains a scope reference to where it was originally declared (declared inside another function, so it keeps a reference to the outer function scope).

----

Closure Scope Chain:
1. Function own scope
1. Enclosing(outer) functions
1. Global scope 