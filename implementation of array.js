class myArray{
    constructor(){
        this.length=0;
        this.data={};
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length]=item;
        this.length++
        return this.length;
    }
}
const newArray= new myArray();
newArray.push('hi')
newArray.push('you')
newArray.push('how are you')
console.log(newArray.get(0));