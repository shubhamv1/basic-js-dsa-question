// ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.
// input x= 121 ------->>>>>>> output:true
// input x = 10 ------->>>>>>> output : false


function isPalindrome(num) { 
	var str = num.toString(); 
	var rev=str.split("").reverse().join(""); 

	if(rev == str){ 
		return true
	} 
	return false
				
} 

var str1 = 1234321; 
var str2 = 112211; 
var str3 = 12345; 

console.log(isPalindrome(str1)); 
console.log(isPalindrome(str2)); 
console.log(isPalindrome(str3));
