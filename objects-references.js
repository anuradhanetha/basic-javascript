// when a primitive is assigned to a variable , it is assigned a copy of the *value*
let a = 7;
let b = a;

b = 9; 

console.log(a);
console.log(b);


let myObjA ={ number: 7};
let myObjB = myObjA;

myObjB.number = 9;
console.log(myObjA.number);

let person1 = {name: "Bob"};
let person2 = {name: "Bob"};
console.log(person1 == person2);//false 
console.log(person1.name == person2.name);//true

let person3 = person1;
console.log(person3 === person1);

function newName(person ){
    person.name = "john";
    return person;
}
let bob = { name: "Bob"};
newName(bob);
console.log(bob);

/*let value = 7;
function add3(number){
    return number;
}
add3(value);
console.log(value);

let value = 7;
function add3(number){
   number = number +3;
}
add3(value);
console.log(value);



/*console.log(typeof []);

    let myArrayObject ={ 
        length: 3,
    0: "john",
    1: "jerry",
    2: "jane",
}
console.log(myArrayObject[0]);*/

//to remove the property delete myOject.c



function objectShare(myObject){
if(myObject.a){
    myObject.b = myObject.a;
    delete myObject.c;
}
return myObject;
}
console.log(objectShare({a: "aaa", b: " bbb", c: "ccc"}));
console.log(objectShare({ b: " xyz", c: "ccc"}));
console.log(objectShare({a: "aaa", b: " bbb", c: "ccc"}));



