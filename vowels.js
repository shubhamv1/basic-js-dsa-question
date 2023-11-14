
function TwoPointer(){
    let s ='hello'
    let i =0;
    let j= s.length - 1;
    let res =s.split('');
    let vowels = new Set (['a','e','i','o','u']);
    while(i<=j){
        
        if(!vowels.has(res[i]))
        i++;
        else if(!vowels.has(res[j]))
        j--
        else{
            [res[i], res[j]]=[res[j],res[i]];
            i++;
            j--;
      }
       }
    return res.join('');
    }
    console.log(TwoPointer());