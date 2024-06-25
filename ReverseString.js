function reverse() {
    let str = 'i am hello';
    let backward = [];
    let totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        backward.push(str[i]);
    }

    return backward.join('');
}

console.log(reverse());

// second approach

function ReverseString() {
    let str = prompt("Enter string:");
   return str.split('').reverse().join('');
}

console.log(ReverseString());

// third approach 

function ReverseString() {
    let str = prompt("Enter string");
    let backward = [];
    let total = str.length - 1;
    for (let i = total; i >= 0; i--) {
        backward.push(str[i]);
    }
    return backward.join('');
}

console.log(ReverseString());

