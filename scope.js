//Scope
/*function myFunction(){
   var a = 20;
}
myFunction();
console.log(a);*/

/*if(true ===true){
   var b = 30;
}
console.log(b);
for(let i = 0; i < 10; i++){
    console.log("test")
}
for(var i =0; i<10; i++);

for(let i = 0; i<=10; i++){
    console.log("test")
}
console.log(i);*/
/* wrie a function that accepts an array of words as strings and returns a string thata
 is a sentence. Be sure to include a period at the end of your sentence. As this is practice using the concept of scope.*/

/*function makeSentence(a,b,c,d,e){
   let fArray =[];
   let sArray =[];
   let tArray =[];
   let fArray =[];
   let fiArray =[];
for (let x = 0; x<= a.length-1; x++){
fArray[x] = a[x];
}
for (let x = 0; x<= b.length-1; x++){
   sArray[x] = b[x];
}
for (let x = 0; x<= c.length-1; x++){
   tArray[x] = c[x];
}
for (let x = 0; x<= d.length-1; x++){
   fArray[x] = d[x];
}
for (let x = 0; x<= e.length-1; x++){
   fiArray[x] = e[x];
}
return ([" fArray "+ " sArray "+ " tArray"+ " fArray"+ "fiArray"]);
}
console.log(makeSentance(["This", "is", "an", "example"," sentence"]));*/


function makeSentance(words) {
    let result = "";
    for (let x = 0; x < words.length; x++) {
        if (x === words.length - 1) {
            result += words[x] + ".";
        }
        else {
            result += words[x] + " ";
        }
    }
    return result;
}

console.log(makeSentance(["This", "is", "an", "example", "sentence"]));
/*
function makeSentance(words) {
    let result = "";
    for (let x = 0; x < words.length; x++) {
        sentence += wordArray[i] + " ";
    }
    sentance = sentenace.trimEnd();
    sentance += ".";
    return result;
}

console.log(makeSentance(["This", "is", "an", "example", "sentence"]));*/

//The web is built with html strings like "<i> yay<i>"

function makeTags(tag, text) {
    let first = `<${tag}>`;
    let last = text;
    let result = (first + last + first);
    return result;
}
console.log(makeTags("i", "hello world"));


function makeTags(tag, text) {
    let openTag = "<" + tag + ">";
    let closeTag = "</" + tag + ">";

    return openTag + text + closeTag;
}
console.log(makeTags("i", "hello world"));

// create a function that accepts a sentence as a sring and returns the longest word 
//in the sentence as a string with just that word


function findLongestWord(sentence) {
    let result = "";
    let wordArray = sentence.split(" ");
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > result.length) {
            result = wordArray[i];
        }
    }
    return result;
}
console.log(findLongestWord('hello sunshine'));

//another way to use for //
function findLongestWord(sentence) {
    let wordArray = sentence.split(" ");
    let longestWord = "";
    for (let word of wordArray) {
        if (word.length> longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord('hello sunshine'));
