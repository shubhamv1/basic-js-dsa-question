function palindromeString(str){
     const len = str.length;
     for(let i =0; i<=len/2; i++){
        if(str[i]!==str[ len-i-1]){
            return 'it is not a palindrome'
        }
        return 'palindrome';

     }
}
console.log(palindromeString('hello'))