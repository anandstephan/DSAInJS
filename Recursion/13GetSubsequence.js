//To get the subsequence formula is 2^n
function getSubsequence(str){
    if(str.length===0){ //Base Case
        return ['']
    }
    let firstChar = str.substring(0,1) 
    let resultant = str.substring(1,str.length)
   
   let newresult =  getSubsequence(resultant)//Faith
    let finalResult = []
    newresult.forEach(res =>{

        finalResult.push(res+firstChar)
        finalResult.push(res)
    })
    return finalResult
}


console.log(getSubsequence("abc"))