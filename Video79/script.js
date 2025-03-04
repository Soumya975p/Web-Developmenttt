let a=prompt("Enter first number")
let b=prompt("Enter the second number")
console.log("a is "+a)
console.log("b is "+b)
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed")
}

sum=parseInt(a)+parseInt(b)
console.log("The sum is ",sum) 

try {
    console.log("")
    
} catch (error) {
    
}