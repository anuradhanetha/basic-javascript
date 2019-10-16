class Car{
    constructor(){
        this.colour ="red";
        this.isStarted =false;
    }
start (){
    this.isStarted =true;
}
stop (){
    this.isStarted = false;
}
}
let car1 =new Car();
let car2 =new Car();

console.log(car1.colour);






