//Function to print the number in the increasing fashion
function PrintIncreasing(n){
    if(n===0){
        return;
    }
    PrintIncreasing(n-1);
    console.log(n)
}

PrintIncreasing(2)