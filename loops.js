let a = 1;

while (a <=100) {
    console.log(a);
    a++ ;
}

for (let i = 1; i <= 10; i++){
    console.log(i);
}

let triangle = "#"
for ( let i = 1; i<=7; i++) {
    console.log(triangle);
    triangle += "#" ;
}
for ( let triangle = "#"; triangle.length <= 7; triangle += "#") {
    console.log(triangle);
   
}


for (let i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 === 0){
    
    console.log("fuzzbuzz");
}
else if ( i % 3 == 0){
    console.log("fizz");  
}
else if (i % 5 == 0){
    console.log("buzz")
}
else {
    console.log(i);
}
}

for (let i= 10; i>=0; i--){

    console.log(i);
}




