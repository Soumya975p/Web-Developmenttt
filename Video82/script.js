
async function sleep() {
    return new promise ((resolve,reject)=>{

        setTimeout(() => {
            resolve(45)
        }, 1000);
     
    })
}
(async function main() {
    // let a=await sleep()
    // console.log(a)
    // let b=await sleep()
    // console.log(b)
    let [x,y]=[1,5]
    console.log(x,y)
})()
