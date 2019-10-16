///function makeABBA takes two parameters(StringA AND stringB) return the result of putting them 
//together in t form of ABBA

function makeABBA(stringA, stringB) {
    let first = stringA;
    let last = stringB;
    let result = (first + last + last + first);
    return result;
}
console.log(makeABBA("Hi", "bye"));
console.log(makeABBA("yo", "Alice"));
console.log(makeABBA("dancing", "Queen"));

// function called firstTwo, that takes single string parameter, 
//the function returns  the first two characters of the string

function firstTwo(stringA) {
    let result = stringA.substring(0, 2);//let result = return string.slice(0, 2); // string[0]+ string[1] another way
    return result;
}
console.log(firstTwo("hello"));//he
console.log(firstTwo("abcdefg"));//ab
console.log(firstTwo("ab"));//ab

//function called middletwo that takes single string parameter of even length, return the middel 2 charectors

function middleTwo(string) {
    let length = string.length;
    let result = length / 2;
    let middle = string.substring(result - 1, result + 1);
    return middle;
}
console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("practice"));
//======================================================
function middleTwo(word) {
    let startingIndex = word.length / 2 - 1;
    let endingIndex = startingIndex + 2;
    return word.slice(startingIndex, endingIndex);
}
console.log(middleTwo("string"));
console.log(middleTwo("code"));
console.log(middleTwo("practice"));//or (let x = 0; x<= a.length-1; x++)


// function called repeat that takes 2 parameters a string and a number return a string that is the input 
//sting repeated the numner of times  specified by the  number mentioned.

/*function repeat(string, number) {
    let result;
    for (let x = 0; x <= number; x++) {
         string(x);
         result += string;
    }

    return result;
}
console.log(repeat("HI", 3));
// function repeat(word,num)
/*function repeat(word, num) {
    let result = "";
    for (let x = 0; x <= num; x++) {
         word(x);
         result += word;
    }
    return result;
}
console.log(repeat("HI", 3));*/

function  triangle(word, num){
    let result = "@";
    for(i=0; i< num; i++){
        result += word;
    }
    return result;

}
console.log(triangle("hi" ,5));