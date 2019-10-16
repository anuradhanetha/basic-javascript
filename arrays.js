/*let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]*/

/*let numbers = [];
console.log (numbers.length);
numbers.push(1,2,3,);
console.log(numbers);
console.log (numbers.length);


let nums =[];
result = 1 
for ( let i = 1; i<=10; i++ ){
    nums.push(i);
}
console.log(nums);
console.log (nums.length);

let colours = ["red", "white", "blue"];
console.log(colours[0]);
//R = "red"; W ="white"; B = "blue";
result =1
for (let i = 0; i <= colours.length-1; i++){
    console.log(colours[i]);
}
/* swap8  */

/*let placeholder = colors[0];
colors[0] = colors[2];
colors[2] = placeholder;
console.log(colors);*/

let swapeEnd = function(int){
    let swap = int[0];
    int[0] = int[int.length-1];
    int[int.length-1]= swap;
    return int;
}
console.log(swapeEnd([1,2,3,4]))//[ 4, 2, 3, 1 ]
console.log(swapeEnd([1,2,3]))//[ 3, 2, 1 ]
console.log(swapeEnd([8,6,7,9,5]))//[ 5, 6, 7, 9, 8 ]

/*function swapeEnds(numberArray){
    let firstvalue = numberArray[0]; 
    let lastValue = numberArray[numberArray.length -1];
    numberArray[0] = firstvalue;
    numberArray[numberArray.length-1] = firstvalue;
    return numberArray;
}
console.log(swapeEnds([1,2,3,4]))//[ 4, 2, 3, 1 ]
console.log(swapeEnds([1,2,3]))//[ 3, 2, 1 ]
console.log(swapeEnds([8,6,7,9,5]))//[ 5, 6, 7, 9, 8 ]*/

/*function firstLast6(numberArray){
    let first = numberArray[0];
    let last = numberArray[numberArray.lenth-1];
    if (first ===6 || last === 6){
        return true;
    } else{
        return false;
    }
}
console.log(firstLast6([1,2,6]));
console.log(firstLast6([6,1,2,3]));
console.log(firstLast6([13,6,1,2,3]));*/


function firstLast6(num){
let first = num [0]
if (first == 6){
    return true;
}
else if  (num[num.length-1]== 6){
    return true;
}
else {
    return false;
}
}
console.log(firstLast6([1,2,6]));
console.log(firstLast6([6,1,2,3]));
console.log(firstLast6([13,6,1,2,3]));

function firstLastEven(numberE){
    let first = numberE[0];
    let last = numberE[numberE.length-1];
    if (first % 2 == 0 && last % 2 == 0){
        return true;
    } 
else{
        return false;
    }
}
console.log(firstLastEven([3,2,1]));
console.log(firstLastEven([4,5,6,7,8]));
console.log(firstLastEven([2]));

// let bothEven =first % 2 === 0 && last % 2 === 0;
//return bothEven;
//return first %2  ===0 && last % 2 ===0;

function addMiddle(numbers , numberm){
    let size = numbers.length;
    let middle = size/2;
    numbers.splice(middle,0,numberm);
    return numbers;
}
console.log(addMiddle([1,2,3,4], 7));
console.log(addMiddle([1,3], 2));

/*functions addMiddle( numArray, element){
let middleIndex = numArray.length/2;
numArray.splice(middleIndex, 0, element);
return numArray;
}*/

/*let colors1 = ["yellow", "green"]
let colors1 = ["yellow", "green"]
let colors1 = ["yellow", "green"]

let combinedArray = [...colors1, ...colors2,...colors3];
let combinedArray2 = colors1.concat(colors2,colors3);

console.log(combinedArray);
console.log(combinedArray);
//------------------------

let colors1 = ["yellow", "green"]
let colors1 = ["yellow", "green"]
let colors1 = ["yellow", "green"]

let combinedArray = [...colors1, ...colors2,...colors3];
let combinedArray2 = colors1.concat(colors2,colors3);

console.log(combinedArray);
console.log(combinedArray2);

let myNums = [3,6,9,2000];
Math.mac(...myNums);
console.log(combinedArray);
console.log(combinedArray);// math.max()
//--------------------
// array.tostring()
// array.join
console.log(myNum.join("Hi");*/

//faser way to loop

let names = ["joe", "jill", "jamie"];
for(let name of names){
    console.log(name);
}

/*let names = ["joe", "jill", "jamie"];
for(let name of names){
    console.log("hi, " +name);
}*/

function myJoin(stringArray, delimiter) {
    let joinedString = "";
  
    for(let i = 0; i < stringArray.length; i++) {
      if (i === stringArray.length - 1) {
        joinedString += stringArray[i];
      }
      else {
        joinedString += stringArray[i] + delimiter;
      }
    }
  
    return joinedString;

    let array1 = ["a", "b"];
    let array1 = ["c", "d"];
    let array3 = [...array1, ...array2];


  


    

























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































  }
  
  console.log(myJoin(["red", "blue", "green"], "*")); // "red*blue*green"

