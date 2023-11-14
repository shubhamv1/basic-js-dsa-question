/* 
 
in mathematics the fibonacci sequence is
 a sequence in ich each number 
is the sum of the two precending ones.

The two numbers in the sequence are 0 and 1

the first two numbers in the sequence are 0 and 1
fibonacci(2)=[0,1];
fibonacci(3)=[0,1,1]
fibonacci(7)=[0,1,1,2,3,5,8]

*/

function fibonacci(n){
    let fib = [0,1];
    for(let i=2; i<=n; i++){
        fib[i] =fib[i-1]+fib[i-2];

    }
    return fib;
}
console.log(fibonacci(10));