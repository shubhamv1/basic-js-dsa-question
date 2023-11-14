const findDuplicates=(arr)=>{
    let sortedArray= arr.slice().sort();
    let result =[];
    for (let i =0; i<sortedArray.length-1; i++){
        if(sortedArray[i+1]=== sortedArray[i])
         result.push(sortedArray[i]);
    }
    return result;
}
console.log(findDuplicates([1,5,5,2,2,8,9,3,3]))