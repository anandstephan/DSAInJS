//Get the stair paths
function getStairPath(n){
    if(n===0){
        return ['']
    }
    if(n<0){
        return[]
    }
let path1 = getStairPath(n-1)
let path2 = getStairPath(n-2)
let path3 = getStairPath(n-3)
let finalResult = []
path1.forEach(element => {
    finalResult.push(element+"1")
});
path2.forEach(element => {
    finalResult.push(element+"2")
});
path3.forEach(element => {
    finalResult.push(element+"3")
});
return finalResult
}

console.log(getStairPath(7))