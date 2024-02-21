// non repeting character

function nonerepet(str){
    const uniquechar = [...new Set(str)];
    return uniquechar.join('')
}
console.log(nonerepet('hello'));
