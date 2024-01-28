//Find the Power of p(x,n)

// function Power(x,n){
//     if(n===1)return x;
//     let res = x * Power(x,n-1)
//     return res
// }

function Power(x,n){
    if(n===1) return x;
    let firstPow = Power(x,Math.floor(n/2))
    let secondPow = Power(x,Math.floor(n/2))
   let result = firstPow*secondPow
   if(n%2) return result*x;
   return result

}

console.log(Power(2,4))