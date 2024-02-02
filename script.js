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


