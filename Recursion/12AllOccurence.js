//All Occurence in the array
function allOccurence(result,arr,idx,n){
    if(arr.length===idx){
        return;
    }
    if(arr[idx]===n){
        result.push(idx)
      
    }
    allOccurence(result,arr,idx+1,n)
  

}
const arr = [8,2,8,7,11,345,56,-3,8]
let result = []
allOccurence(result,arr,0,8)
console.log(result)