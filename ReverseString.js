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
