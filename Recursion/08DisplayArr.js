//Display the Array in decreasing order
function printArr(arr,idx){
    if(idx===arr.length)return;
    printArr(arr,idx+1)
    console.log(arr[idx])

}

let arr = [1,2,3,4,5]
printArr(arr,0)