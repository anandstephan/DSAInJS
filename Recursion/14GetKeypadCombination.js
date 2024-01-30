//Get the subsequence of the keypad
let keyboard = {1:"abc",2:"def",3:"ghi",4:"jkl",5:"mnop",6:"qrst",7:"uv",8:"wxyz",9:"."}

function getCombination(num){
    if(num.length===0){
        return [""]
    }
let str = num+""

let firstChar = str[0]
let ros = str.substring(1,str.length)
let result = getCombination(ros)
let finalResult = []
let newstr = keyboard[firstChar]
for(let i=0;i<newstr.length;i++){
   result.forEach(res =>{
    finalResult.push(res+newstr[i])
   })
}
return finalResult
}
console.log(getCombination(573))