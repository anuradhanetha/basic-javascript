/*function authList(letters) {
    let arrayLetters = [];
    let result;
    for (let i = 0; i < letters.length; i++) {
        arrayLetters[i] = letters.substring(i, i++);
    }
    return arrayLetters;

}

console.log(authList(['john123', 'alex222', 'sandra1']));    // returns true
console.log(authList(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authList(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character*/

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

function authList(letters) {
    let arrayLetters = letters.split("");
    let result;
    letters += " ";
    for(let i =0; i<letters.length-1; i++){
      arrayLetters[i] = letters.substring(i, i++);
    }
    let length = false;
    let lowercase = false;
    let lettersAndNum = true;
    let username = "";
    for (let i = 0; i < arrayLetters.length; i++) {
        if (arrayLetters.length > 6 && arrayLetters.length < 10) {
            username = arrayLetters[i];
            length = true;
            let asciiCode = arrayLetters[i].charCodeAt(0);
            if (asciiCode >= 97 && asciiCode <= 122) {//lowercase letter
                lowercase = true;
            }
            if (asciiCode >= 49 && asciiCode <= 57 || asciiCode >= 65 && asciiCode <= 90 || asciiCode >= 97 && asciiCode <= 122) {//numbers

            }
            else {
                lettersAndNum = false;
            }
        }

    }
    if (lettersAndNum && length && lowercase) {
        return true;
    }
    else {
        return false;
    }

}
console.log(authList(['john123', 'alex222', 'sandra1']));    // returns true
console.log(authList(['john123', 'alex222', 'sandraW']));    // returns false because sandraW has no number
console.log(authList(['john_123', 'alex222', 'sandra1']));   // returns false because john_123 contains an invalid character
  
  