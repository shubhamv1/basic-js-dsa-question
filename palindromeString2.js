function palindrome(str){
    let back =str.split("").reverse().join("");
     if(back == str){
         return 'plaindrome';
     }
     return 'it is not palindrome';
 }
 console.log(palindrome('lol'));