let a =[1,3,5,7,9]
console.log(a)
console.log(a.length)
console.log(a.toString())
console.log(a.join(" and "))
a.pop()
console.log(a)
a.push(11)
console.log(a)
// shift pop ka bhai hota hai but isme first se hota hai
// unshift jo hota hai voh push ka bhai hota hai
delete a[1]
a.sort()//it will sort elements alphabetically
a.splice(5,11)//It will remove the given numbers if numbers are available or will add if both numbers are not present