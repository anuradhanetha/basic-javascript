/*# Assignment Format Phone Number:
Write a function that takes a phone number as a string as an argument and performs the following:
- If the phone number is less than 10 digits assume that it is bad number
- If the phone number is 10 digits assume that it is good
- If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
- If the phone number is 11 digits and the first number is not 1, then it is a bad number
- If the phone number is more than 11 digits assume that it is a bad number

If the number is good, return a string containing only the numerals of the phone number. If the number is made,
 return a string of 10 '0's.
 var text = '42px';
var integer = parseInt(text, 10);*/

function validatePhoneNumber(stringnumber){
    let length = stringnumber.length;
    let Int = parseInt(stringnumber, 10);
    if(Int = 10){
        return stringnumber;
    }else if(Int > 10 || length < 10){
        stringnumber = 0000000000;
    }
    else if(stringnumber.charAt(0)== 1){
        let fCut = stringnumber.slice(0)
        return fCut;
    }
}
console.log(validatePhoneNumber('(123) 456-7890'));  
console.log(validatePhoneNumber('123.456.7890'));  
console.log(validatePhoneNumber('11234567890'));  
console.log(validatePhoneNumber('21234567890'));  
console.log(validatePhoneNumber('123456789'));
console.log(validatePhoneNumber('212345678901234'));
console.log(validatePhoneNumber('123')); 
