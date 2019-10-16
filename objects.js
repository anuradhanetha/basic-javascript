/*let person ={
    name:"anu",
    phone:"479-755-5555",//key and value
    aga:40,
  };
  console.log(person);
  console.log(person.name);*/

 /* let person1 ={
      name:"anu",
      children:[
          "Chinnu",
          "Hamsi",
      ],
      phone:"4792225566",
      job:"movista",
  };
  console.log(person1.children[0]);// chinnu
  console.log(person1);
  console.log(person1.name);
  console.log(person1.phone);
  console.log(person1.job);
  console.log(person1.children);

  let myCar ={
    name:"Honda",
    colour:"blue",
    vin: 123456789,
};
console.log(myCar);
console.log(myCar.name);
console.log(myCar.colour);
console.log(myCar.vin);
myCar.milage = 10000;
  console.log(myCar.milage);
  console.log(myCar["milage"])

  person1.car = myCar;//creating ref to the car property
  console.log(person1);

  myCar.windows = [6];
  console.log(myCar.windows);
  console.log(person1);

  let bible = {
    books : 66,
    chapters : "many",
    content : ("creator","creation"),
  };
  console.log(bible);
bible.message ="love",
console.log(bible);

let pastors = {
  a : "anndrew",
  b : ["Ronnie"],
  c : "Samuel",
};
console.log(pastors);
bible.name = pastors;
console.log(bible);
pastors.d = "joji",
  
console.log(bible);
bible.praise = "psalms",
console.log(bible);
console.log(pastors);*/

/*function newName(person ){
  person.name = "john";
  return person;
}
let bob = { name: "Bob"};
newName(bob);
console.log(bob);

let value =7;
function add3(num){
   num = num +3;
   return num;
}
add3(value);
console.log(value);

let flags ={
  colours: [
    "yellow",
    "blue",
    "green",
  ]
}
flags.colours.push("pink");
flags.India = ["ORANGE", "WHITE","GREEN"],
console.log(flags);
flags.India.splice(2, 0,"in between Circle");
console.log(flags);
*/
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


function bully(myObj){
  if(myObj.a){
    myObj.a = myObj.b;
    myObj.a = "";
  }
return myObj;
};

console.log(bully({"a": "candy", "b": "dirty"}));

function bully(myObject){
  if(myObject.a){
    myObject.a = myObject.b;
    myObject.a = "";
    delete myObject.c;
  }
  return myObject;
};
console.log(bully({a: "aaa", b: " bbb", c: "ccc"}));
//LESSION April 15
/*let Car = {
  colour: "red",
  wheels: 4,
  passinger: [
    {name: "bob"}
  ]
  start: function(){

    this.isstarted =true;
  }
}*/