//Function to print the number in the decreasing fashion
function PrintDecreasing(n){
    if(n===1){
        console.log(n+1);
        return;
    }
    console.log(n)
    PrintDecreasing(n-1)
}

PrintDecreasing(2)