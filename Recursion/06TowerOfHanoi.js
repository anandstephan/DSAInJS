function towerOfHanoi(TotalDisc,src,dest,aux){
    if(TotalDisc===0)return;
towerOfHanoi(TotalDisc-1,src,aux,dest)
console.log("Move Disc "+TotalDisc,src,dest,aux)
towerOfHanoi(TotalDisc-1,aux,dest,src)
}

towerOfHanoi(3,"A","B","C")