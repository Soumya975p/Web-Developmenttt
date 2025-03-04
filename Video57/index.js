console.log("This is a tutorial on loops")
let a =1;

for (let i = a; i < 10; i++) {
    console.log(a);
    a=a+1;
    // this is a basic for loop
}

let object={name:"sp", role:"programmer",company:"CWH"}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key,element)
    }
}