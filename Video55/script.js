console.log("This is video on varriables")
var a=5;
var b=7;
var c="Ravi";
console.log(a+b)
a=a+1
console.log(a+b)
console.log(typeof a,typeof b, typeof c)
const a11=5;
// a11=a11+1; we can not change value of a constant variable as it is not allowed4
{
    let a=9;
    console.log("The value of a inside the let block is "+a)
    //let is block scoped it will only show a = 9 within this blocl
}
console.log("The value of a outside let block is "+ a)

let o = {
    "name":"Java script",
    "job code":101   
}
console.log(o)
o.salary="100thousand"
console.log(o)
o.salary="100thousand"
console.log(o)