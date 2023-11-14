function removeDuplicate(arr){
 return arr.filter((item,index)=>arr.indexOf(item)===index);

}
console.log(removeDuplicate([1,5,5,6,2,4,4,4]));