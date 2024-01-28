//Factorial of a Function
function factorial(n){
    if(n===1) return 1;
    let fact = factorial(n-1);
    let result = fact*n
    return result
}

factorial(5);