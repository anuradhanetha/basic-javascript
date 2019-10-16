// "hay junk needle hay morejunk hay random"
// create a function that takes a string of words and finds the position of the needle



/*function findNeedle(hayStack){
    let wordsArray = hayStack.split(" ");
    let word = hayStack.substring(9,14);
   if(word === "needle"){
       return word +` Found needle at position 2`;
   }
}
console.log(findNeedle(hayStack));*/
//--------------------------------------
let hayStack = "hay junk needle hay moreJunk hay random";
function findNeedle(wordString) {
    let wordsArray = wordString.split(" ");
    for (let i = 0; i < wordsArray.length; i++) {
        if (wordsArray[i] === "needle") {
            return `found needle at position ${i}.`;
        }
    }
    return "404 not found. ";
}
console.log(findNeedle(hayStack));


function findNeedle(wordsString) {
    let wordsArray = wordsString.split(" ");
    let position = wordsArray.indexOf("needle");
    return `found needle at position ${position}.`
}
console.log(findNeedle(hayStack));

function startsWithB(word) {
    if (word[0] === "b" || word[0] === "B") {// if(word[0].toUpperCase() === "B")// 
        return true;
    }
    else {
        return false;
    }
}
console.log(startsWithB("boy"));
console.log(startsWithB("Boy"));
console.log(startsWithB("cat"));

//count b words
function countBWords(word) {
    // let array = word.split(" ");
    let result = 0;
    for (let i = 0; i < word.length; i++) {// for(let word of words){
        if (startsWithB(word[i]) === true) {// if(startsWithB(word))
            result += 1;//result++
        }
    }
    return result;
}
console.log(countBWords(["boy", "Boy", "Cat", "dog"]));
console.log(countBWords(["boy", "toy", "Cat", "dog"]));

//In this little assignment you are given a string of space seperated numbers 
//and have to return the highest and the lowest number 

function highAndLow(num) {
    let array = num.split(" ");
    let high = array[0];
    let low = array[0]; 
    for (let i = 1; i < array.length; i++) {
        current = array[i];
        if (current > high) {
            high = current;
        } 
        if( current < low){
            low = current;
        }
    }
    let result = `${high} ${low}`;
    return result;
}
console.log(highAndLow("1 2 3 2 5"));
console.log(highAndLow("1 2 7 4 5"));
console.log(highAndLow("1 9 3 4 8"));
//--------------------------------------------------
/*function highAndLow(numStr) {
    let nums =numStr.split("");
    let highest = numStr[0];// -Infinity;
    let lowest = numStr[0];// Infinity;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>highest){
            highest = num[i];
        }
        if(nums[i]< lowest){
            lowest = num[i];
        }
    }
    return highest + " "+ lowest;
}
console.log(highAndLow("1 2 3 2 5"));
console.log(highAndLow("1 2 7 4 5"));
console.log(highAndLow("1 9 3 4 8"));*/

//We know the population fora small town at the beginning of a year. the population regularly increases 
//by a certain percent per year and moreover a given number of new inhabitants per year come to live in the town. 
//how many years does the town need to see its population greater or eual to a population goal? write this function. 
//it should accept the following arguments: current population, growth percentage, incoming residents, population goal

function howManyYears(currentpopulation, growthpercentage, incomingresidents, populationgoal){
    let numYears = 0;
    let totalPopulation = currentpopulation;
    while (totalPopulation<= populationgoal){
    totalpopulation += totalpopulation * (growthpercentage/100)+ incomingresidents;
    numYears++;
}
return numYears;
}
console.log(howManyYears(1500, 5, 100, 5000));//15
console.log(howManyYears(1500000, 2.5, 10000, 2000000));//10
console.log(howManyYears(1500000, 0.25, 1000, 2000000));//94