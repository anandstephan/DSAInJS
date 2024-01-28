//Find the Maximum in the Array
function FindMax(arr,idx){
    if(idx===arr.length) return arr[idx] ;
let max = FindMax(arr,idx+1)
return max>arr[idx] ? max:arr[idx]
}

const arr = [22,2,33,7,19]
console.log(FindMax(arr,0))