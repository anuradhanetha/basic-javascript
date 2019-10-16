

 /* function isEqual(x, y){
      if( x == y) {
          return true;
      }
else  {return false;
    }
}
console.log(isEqual("abc", "abc"));
console.log(isEqual("abc", "cda"));
console.log(isEqual("abc", "ABC"));*/


/*let multiply = function( a, b, c)
{
  return  a * b * c ;
}
console.log(multiply(1,2,3));
console.log(multiply(0,100,200));
console.log(multiply(5,2,2));

multiply(2,3)

let sortaSum = function( a ,b){
   let result = a + b;
   if ( result >= 10 && result <= 19){
       return 20;
   }
   else {return result;
   }
}
console.log(sortaSum(2,4));
console.log(sortaSum(5,5));
console.log(sortaSum(5,10));
console.log(sortaSum(10,11));

//(conditional) ? <return if true> : <return if false>
/*return (sum >= 10 && sum <= 19) ? 20 :sum;*/

/* arrow function 
let add = (a,b)=> a+b; 
let square = a => a * a;
no parameters:
let getName = () => "Joe";
let name = getName();
*/
/*let sum = (a,b) => {return a + b};
console.log(sum(2,2));

let getFullName = (first,last) => first + " " +last;
console.log(getFullName("Jane", "Doe"));
console.log(getFullName("John", "Smith"));

let formatCurrency = (num) =>  " $" + num.toFixed(2)
console.log(formatCurrency(19.777));
console.log(formatCurrency(30));


function amount(P, R, M, T ){
    return  P * ( 1 + (R /M ) * T);
}
console.log(amount(5000, 0.2 ,12, 12));

function multiplier(factor) {
    return number => number * factor;
  }
  
  let twice = multiplier(2);
  console.log(twice(5));

  let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let journal = [
    {events: ["work", "touched tree", "pizza",
              "running", "television"],
     squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
              "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
              "beer"],
     squirrel: true},
];


  function multiFunction(num, innerFunction){
   return innerFunction(num);
  }
function addTwo(num){
    return num +2;
}
multiFunction(5,addTwo);

function square(num)
{
    return num * num;
}
multiFunction(2,square);
  


let getSum = add;
getSum (1,3);

console.log("start");
    WriteFile("myFile.txt"())=> console.log("done"));
console.log("line 3"); */

function greatest(a, b){
    if(a == b){
        return a;
    }else {
        return b;
    }
}
console.log(greatest(2, 5))