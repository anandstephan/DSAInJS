function lastOcc(arr,idx,n){
    if(arr.length===idx){
        return -1;
    }
    let presentNumber = arr[idx]
    let lastIndex = lastOcc(arr,idx+1,n)
    return lastIndex===-1?presentNumber===n ? idx:-1:lastIndex 
}


const arr = [22,4,5,6,8,12,45,9,8,66,1,8]
console.log(lastOcc(arr,0,-4))