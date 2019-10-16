/*let add = function(a,b = 0){
    let sum = a+b;
    
    return sum;
    }
    let answer= add(2,3);
    console.log(add(2, 3));
    console.log(add(4, 3));

   
   
    let  isNumber = function(a){ 
      let result = typeof(a);
      if (result == "number"){
        return true;
      }
      else 
      { return false;}
    }
    let result = isNumber(123);
    console.log (result);
    
/*just in one line
//return typeof a === "number";
console.log(isNumbere(456));
console.log(isNumbere("cat"));
console.log(isNumbere(123));*/

/*let greet = function(a){
  //  console.log( "Hi," + " "+ a+ "!");
    console.log (`Hi, ${a}!`);
}
greet("Karen!");
greet("Bob!");


let addOne = function(a){
 let  add = a+ 1;
return add;
}
//let addoOneAgain = addone;
console.log(addOne(2));
console.log(addOne(5));
//console.log(addOneAgain(7));

//function greet(name){
    console.log(`hi, ${name}`);
}
sayHi("michel")
sayHi("bob");
sayHi(" ")
*/

/*function monkeyTrouble(aSmile, bSmile) {
    if (aSmile === true && bSmile === true) {
      return true;
    }
    else if (aSmile === false && bSmile === false) {
      return true;
    }
    else {
      return false;
    }
  }
  console.log(monkeyTrouble(true, true)) // → true
  console.log(monkeyTrouble(false, false)) // → true
  console.log(monkeyTrouble(true, false)) // → false*/

  function monkeyTrouble(aSmile, bSmile) {
    return (aSmile && bSmile) || (!aSmile && !bSmile);
  }
  console.log(monkeyTrouble(true, true)); // → true
  console.log(monkeyTrouble(false, false)); // → true
  console.log(monkeyTrouble(true, false)); // → false */
    


function add( a,b){
  return a+b;
}
console.log(add(2,3));


