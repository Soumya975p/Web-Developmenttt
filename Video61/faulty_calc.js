let random=Math.random()
let a =prompt("Enter the first number")
let b=prompt("Enter the second number")
let c=prompt("Enter the operation to perform")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random<0.1)
{
    // it will perform correct calculations
    // alert(`The result is eval('${a} ${c} ${b}')`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    //It will be faulty
    c=obj[c]
    alert(`The result is ${eval('${a} ${c} ${b}')}`)
}