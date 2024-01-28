//Display the Array in increasing order
function printArr(arr,idx){
    // if(arr.length===idx)return;
    console.log(arr[idx])
    printArr(arr,idx+1)
}

let arr = [1,2,3,4,5]
printArr(arr,0)