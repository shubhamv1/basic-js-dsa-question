// Run a while loop. start dividing by two and if not divisible increase divider until u r done.
/*
Interviewer:What is the run time complexity? can you make this better

You: this is O(n). you can increase divisor by 2 form divisor = 3. Because, if a number is divisible by any even number it would divisible by 2. Hence, you dont need to divide by even numbers. Besides, you will not have a factor bigger than half of its value. 
if you want make it complex use tough concept in no. 1 (try-2. if u get it)
*/

function checkPrimeFactor(n){
    var factors = [], 
      divisor = 2;
  
  while(n>2){
    if(n % divisor == 0){
       factors.push(divisor); 
       n= n/ divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;

}
console.log(checkPrimeFactor(55))