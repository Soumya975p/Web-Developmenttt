console.log("Ravi")

let a= document.getElementsByClassName("box")
console.log(a)
a[2].style.backgroundColor="red"//this will change bg of box at 3 number or 2nd index but we cannot specifically change it to something such that a box 3 will change for ex if numbering is done as 1,2,2.5and 3 then it will apply at 2.5

let b=document.getElementById("aqua")
console.log(b)
b.style.backgroundColor="aqua"//here it will apply according to the id given to the element as id is specifc to something if we add any element it will not affect it as it is based on its id only


document.querySelector(".box").style.backgroundColor="yellow"//This will apply to the first box only as it will search for box and when it finds the first box then it will color it and stop there itself


console.log(document.getElementsByTagName("div"))//Isme saare div aa jayemge jitne bhi program mai hai