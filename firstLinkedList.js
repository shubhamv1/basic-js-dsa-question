//let myLinkedList ={
  //  Head:{
    //    value:10,
      //  next:{
        //    value:5,
          //  next:{
            //    value:10,
              //  next:{
//
  //              }
    //        }
      //  }
    //}
//}

class LinkedList{
    constructor(value){
  this.head={
    value:value,
    next:null
  }
  this.tail=this.head; 
  this.length=1;
    }
    append(value){
       const newNode={
        value:value,
        next:null
       } ;
       this.tail.next=newNode;
       this.tail=newNode;
       this.length++;
       return this;

    }
    prepend(value){
        // add value starting of node 
           const newNode = {
            value:value,
            next:null
           }
           newNode.next =this.head;
           this.head=newNode
           this.length++;

    }
}
const myLinkedList= new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);