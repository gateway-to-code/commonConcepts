/*
Write a function that returns an array for the fibonnaci sequence of a given size

For example 

INPUT 			OUTPUT
fibonacci(0)	//[]
fibonacci(1)	//[1]
fibonacci(2)	//[1, 1]
fibonacci(6)	//[1,1,2,3,5,8]

Start by writing in plain english the list of steps your function needs to perform 	
in order to make your function run 

***Bonus:
	Describe what happens for the input of -1: 
	fibonacci(-1) 

	Results - 


We know that the next number is (n-1) + (n-2)
and that our base case is fib(0) = null, fib(1) 
we know that fib(n-1) + fib(n-2) 
so if we loop through till one and add it to a list we can get the nubm
*/

const fibonacci = function(num) {
	let seq= [];
	const fib = function(val) {
		if(val <=1) {
			console.log('this is the base :', val)
			return val;
		} else {
			console.log('this is numb', val)
			return fib(val-1) + fib(val-2);
		}
	}

	for(let i=num; i>=2; i--) {
		console.log('fib(nm)', fib(i), i);
		seq.push(fib(i))
	}

	
	return seq;
}