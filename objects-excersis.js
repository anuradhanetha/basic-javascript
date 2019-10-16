let flag ={
    country: "United States",
    colours: [
        "red",
        "white",
        "blue"
    ],
}
for(i = 0; i < flag.colours.length; i++){
    console.log(flag.colours[i]);
}
flag.colours.push("green")
console.log(flag.colours);


let myObj = {
    a: 1, 
    b:6
}
myObj.c = myObj.a + myObj.b;
console.log(myObj);
console.log(myObj.c);
//function make c//

function makeC(myObj1){
    //myObj1.c =myobj1.a +myobject .b;
  one = myObj1.a;
  two = myObj1.b;  

myObj1.c = one + two;
return myObj1;
}
console.log(makeC({a: 2, b: 5}));
console.log(makeC({a: 4, b: 2}));
// 

function objectBully(myObject){
if(myObject.a){
    myObject.b = myObject.a;
    myObject.a = "";
}
 return myObject;
}
console.log(objectBully({"a": "candy", "b": "dirty"}));
console.log(objectBully({"a": "candy"}));
console.log(objectBully({"a": "candy", "b": "carrot"}));




