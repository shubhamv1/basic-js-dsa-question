// reverse string 

function Array(){
    let str1 ='i am hello';
    let str=str1.split('');
    // let left =[];
    // let right = str.length-1;
    // for(let i =right; i>=0; i--){
    //        left.push(str[i]);
    // }
    // return left.join('')
    let i=0;
    let j=str.length - 1;
    while(i<j){
       let t=str[i];
       str[i]=str[j];
       str[j]=t
        i++;
        j--;    
    }
    
    return str.join('');
}
console.log(Array());