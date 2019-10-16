function Car() {
    this.colour = "red";
    this.isStarted = false;
}

Car.prototype.start =function(){
    this.isStarted = true;
}
Car.prototype.stop =function(){
    this.isStarted = true;
}
let car1 = new Car();
let car2 = new Car();
console.log(car1.colour);
console.log(car2.colour);

car1.hasOwnProperty("colour");
car1.start();

car1.colour = "purple";

console.log(car1.colour);
console.log(car2.colour);
/*
what happens when you use "new"
1. cretes a new empty object
2: new sets "this " to point to the new object
3. with "this"  set up, we call the constructor function
4. the body of the function assigns the properties
*/