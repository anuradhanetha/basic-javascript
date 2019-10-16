function validatePhoneNumber(stringnumber) {
    let Int = stringnumber.split('');
    let length = Int.length - 1;
    let array = [];
    let num = 0;
    for (x = 0; x <= length; x++) {
        if ((Int[x] != '.') && (Int[x] != '-') && (Int[x] != '(') && (Int[x] != ')') && (Int[x] != ' ')) {
            array[num] = Int[x];
            num++;
        }
    }
    if (array.length < 10 || array.length > 11) {
        return '0000000000';
    } else if (array.length == 10) {
        let fin = "";
        for (let y = 0; y < 10; y++) {
            fin += array[y];
        }
        return fin;
    } else if ((array[0] === '1') && (array.length == 11)) {
        let one = "";
        for (let x = 1; x < 11; x++) {
            one += array[x];
        }
        return one;
    }
    else {
        return '0000000000';
    }

}

console.log(validatePhoneNumber('(123) 456-7890'));
console.log(validatePhoneNumber('123.456.7890'));
console.log(validatePhoneNumber('11234567890'));
console.log(validatePhoneNumber('21234567890'));
console.log(validatePhoneNumber('123456789'));
console.log(validatePhoneNumber('212345678901234'));
console.log(validatePhoneNumber('123')); 

//===================

function validatePhoneNumber(phone){
let digits= phone.split(" ");//["("."1"....]
let  filteredDigits = "";
let badDigits = "0000000000";
for(let i = 0; i< digits.length; i++){
   let asciiCode =  digits[i].charCodeAt(0);//"("....last
   if(asciCode > 47 && asciiCode < 58){// if(digits[i]>="0" &&  digits[i]<=9)
filteredDigits += digits[i];
   }
}
if( filteredDigits.length === 11){

    if(filteredDigits[0] === "1"){
        filteredDigits = filteredDigits.slice(1);
    }
    else {
        filteredDigits = badDigits;
    }
}
if (filteredDigits.length <10 || filteredDigits.length > 11){
    filteredDigits = badDigits;
}
return filteredDigits;

}
console.log(validatePhoneNumber('(123) 456-7890'));
console.log(validatePhoneNumber('123.456.7890'));
console.log(validatePhoneNumber('11234567890'));
console.log(validatePhoneNumber('21234567890'));
console.log(validatePhoneNumber('123456789'));
console.log(validatePhoneNumber('212345678901234'));
console.log(validatePhoneNumber('123'));

