function getMazePath(sr,sc,dr,dc){
    if(sr===dr && sc===dc){
    
        return ['']
    } 
    if(sr>dr || sc>dc){
        return []
    }  
    let horizontal = sc+1
    let vertical = sr+1
    let hpaths = getMazePath(sr,horizontal,dr,dc)
    let vpaths = getMazePath(vertical,sc,dr,dc)
    let finalResult=[]
    hpaths.forEach(element => {
        finalResult.push(element+"h")
    });
    vpaths.forEach(element => {
        finalResult.push(element+"v")
    });
    return finalResult
}

console.log(getMazePath(1,1,3,3))