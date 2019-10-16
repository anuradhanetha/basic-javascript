function endsWithOther(a,b){
let short = a.length;
/*let long = b.length;

if(short >= long){
    return short; 
}else {return long;
}
if( a.lastIndexof("a") == b.lastIndexof("b"))){
    return true;
}else {
    return false;
}
}
console.log(endsWithOther('yyy', 'HelloYyy'));*/


function endsWithOther(stringA,stringB){
let smaller ;
let larger;
if(stringA.length>stringB.length){
    smaller =stringB;
   larger =stringA;
}
else{
    smaller =stringA;
   larger =stringB;
}
let ending;
ending = larger.slice(smaller.length*-1);
if(smaller.toUpperCase() == ending.toUpperCase()){
    return true;
}
else {
    return false;
}
}
}
console.log(endsWithOther('yyy', 'HelloYyy'));
console.log(endsWithOther('HelloYyy', 'Yyy'));
console.log(endsWithOther('Zzzy', 'Helloxxy'));

function endsWithOther2( stringA, stringB){
    let stringAUpperCase = stringA.toUpperCase();
    let stringBUpperCase = stringB.toUpperCase();
    return(
        stringAUpperCase.endsWith(s)
    )

}