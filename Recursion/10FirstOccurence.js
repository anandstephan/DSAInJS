//Find the occurence of the number in th array 
function firstOcc(arr,idx,n){
    if(idx===arr.length){
        return -1;
    }
    if(arr[idx]===n) return idx;
    return firstOcc(arr,idx+1,n)
}

const arr = [22,4,5,6,8,12,45,9,8,66,1,8]
console.log(firstOcc(arr,0,-2))