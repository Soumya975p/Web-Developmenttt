
function sum(a,b,c){
    return a+b+c
}
(async function main() {
    // let a=await sleep()
    // console.log(a)
    // let b=await sleep()
    // console.log(b)
    let [x,y,...rest]=[1,5,10,15,20,25]//rest is a variable which is a array that stores values other than x and y
    console.log(x,y,rest)//This use of variable by use of 3dots(...) to store letover values is called DESTRUCTURING

    let obj={
        a:1,
        b:2,
        c:3
    }
    
    let {a,b}=obj//Iska matlab hota hai ki a aur b ko pichle obj se nikal lo aur is naye obj me put kr do to take selected elements from a object
    console.log(a,b)
    let arr=[1,3,5]

    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))//This (...) operator can also se used to open elements of an array and then put it to the sum function
})()

