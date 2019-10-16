let car = {
    colour: "red",
    isStarted: false,
    start: function(){
        this.isStarted = true;// this is the object
    },
    paint: function(colourparm){
        this.colour = colourparm;
    }
};
console.log(car.isStarted);
car.start();
console.log(car.isStarted);
car.paint("yellow");
console.log(car.colour);



let car1 = {
    isStarted: false,
    start: function(){
        this.isStarted = true;// this is the object
    },
    stop: function(){
        this.isStarted =false; 
    },
    drive: function(){
        if(this.isStarted == true){
            console.log(vroom);
        }else {
            console.log("you need to start the car")
        }
    }
}
car1.stop();
car1.drive();
// start(), stop(), drive(),: can also be used instaed of saying : function
//class: blue print

let car2 ={
    isStarted: false,
    start: function(){
        this.isStarted =false;
    },
    drive: function(){
        if(this.isStarted == true){
            console.log(vroom);
        }
    }
}

    

/*Object
hasownProperty
keys()
*/