const String =["a", "b","c","d"];
// 4*4=16 bytes of storage


//push
String.push('e'); // 0(1)  Add element in last in array
//pop
String.pop();
String.pop();// O(1) remove element in last of array
//unshift

String.unshift('x');  //  O(n) Add element starting of Array

// splice : when we want to add element btw the array than we use splice array function
String.splice(2,0,'shubham');  // 2 is a index of number of array element 0 is indicate i can not want to delete anything in array , last one is string wich is put in in array of index no 2 which assisgn in already 



console.log(String);

// refrence type

//[]===[]; // on console return false 



// context
// instantiation
