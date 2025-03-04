// console.log("Object Oriented Programming")
// console.log("home is away from me as it is very far form me the city than the other country and the citie")

// let obj={
//     a:1,
//     b:"Iron Man"
// }

// console.log(obj)

class Animal{
    // constructor(){
    //     console.log("Class Aninal is succesfully created.....")
    // }
    constructor(name){
        this.name=name
        console.log("Class Animal is succesfully created.....")
    }

    eats(){
        console.log("Animal can eat")
    }
    jumps(){
        console.log("Animal can jummp")
    }

}

class Lion extends Animal{
    constructor(name){
        super()
        console.log("Class Lion is succesfully created.....")
    }

}

// let an=new Animal
// console.log(an.eats)
let a=new Animal("cow")
let l=new Animal("Lion")