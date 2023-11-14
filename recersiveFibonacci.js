function recursiveFib(n){
    // find the base case 
    if(n < 2){
        return n;
    }
    return recursiveFib(n - 1) + recursiveFib(n - 2);
}
console.log(recursiveFib(10)); // Output: 5
