//write a function that accepts a string aa an  arrugument and returns the reverse of it
function reverseString(string) {
    let result = "";
    for (i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}
console.log(reverseString('Hello, World!'));
console.log(reverseString('This is the test'));
console.log(reverseString('Javascript is great'));

/*let myString = "ABC";
myString[0] === "A";//0
myString[1] === "B";//..
myString[2] === "C";myString.length-1*/

//"abc".split("").reverse().join(""); another way to reverse the words.
//create a function called isPalindrome that takes a single 
//string and returns a boolean indicating if the string is a palindrome

function isPalindrome(string) {
    return word === reverseString(word);
}
console.log(isPalindrome("bob"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("cat"));
console.log(isPalindrome("civic"));
// " racecare" 

function isPalindrome(word) {
    let halfLength = word.length / 2;
    for (let i = 0; i <= halfLength; i++) {
        if (word[i]) !== word[word.length - 1 - i]) {
            return false;
        }

    }
    return true;
}
console.log(isPalindrome("bob"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("cat"));
console.log(isPalindrome("civic"));
// Validate Usernames//
