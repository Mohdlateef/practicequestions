// console.log('abc');

let obj={
    a:10,
    b:20,
    c:30,    
}
function f1(...args){
    console.log(args)
    console.log(this.a);
}
let arr=[1,2,3]
// let f2=f1.apply(obj,arr);


delete Array.prototype.filter;

Array.prototype.filter=function(callbackfn){
    let arr=[]
    for(let i=0;i<this.length;i++)
    {
        if(callbackfn(this[i],i,this)==true)
        {
            arr.push(this[i]);
        }
        
    }
return arr;
}
let arr4 =arr.filter((ele)=>{

      return 1;
    
})
console.log(arr4);


function Fun1(bal,accc,branch)
{
    this.balance=bal;
    this.acc=accc
    this.branch=branch
  

}
Fun1.prototype.getam=function(amount)
{ this.balance=this.balance+amount;
    let bal=this.balance

console.log(bal);
return bal;
}
let obj1=new Fun1(100,"hand","chadoora");

console.log(obj1.__proto__)
console.log(obj1.getam(500))
function fun2(bal,acc,branch){
    let obj={}
    obj.bal=bal;
    obj.branch=branch;
    obj.acc=acc;
    return obj
}
fun2.prototype.getam=(amount)=>{
    return this.bal=this.bal+amount;


let obj3=fun2(100,"saving",'cha')
console.log(obj3.getam(100))
class Bankaccount{
    constructor(name,branch,balance)
    {
        this.name=name;
        this.branch=branch;
        this.balance=balance;
    }
    addmoney(amount){
        this.balance+=amount;
        return this.balance;
    }
}
let user1=new Bankaccount("umer","k",100);
user1.addmoney(100)
console.log(user1.balance
    
    

    );
let input=document.getElementById("input");
input.addEventListener("keyup" ,fun1);
let count=1;
function fun1(){
    console.log(count)
    f2();
    count++;
}

function f2(){
    if(setid){
        setTimeout(setid);
    }
    var setid=setTimeout(()=>{
        console.log(count);

    },3000)
}