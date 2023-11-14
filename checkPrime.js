/*  a prime number is only divisible by itself and 1.
 So, i will run a while loop and increase by 1. 
 (look at the code example. If you don't get it. this is not your cake. 
        Do learn javaScript basics and come back.)*/


function isPrime(){
    let n;
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}
console.log(isPrime());