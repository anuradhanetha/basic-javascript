const heroes = require("./heroes.js");

let herioein = heroes.find(hero => hero.name.toLowerCase()=== "namora");
console.log(herioein);
/*let blackWidow = heroes.find(function(hero){
    return hero.name.toLowerCase() === "black widow"
});
console.log(blackWidow);

let blackWidow1 = heroes.find(hero => hero.name.toLowerCase()=== "black widow");
console.log(blackWidow1);

let strength = heroes.find(hero=> hero.strength === 5000);
console.log(strength);

/*function getBlackWidow(hero){
    return hero.name.toLowerCase() === "black widow";
}
function getHeroByName(name){
    return(hero)=> hero.nam === name;
}

let gender = heroes.find(hero => hero.sex === 'f');
console.log(gender);

let strength1 = heroes.find(hero => hero.strength === 100000);
console.log(strength1);
 let vision =heroes.filter(hero => hero.name.toUpperCase() === 'VISION');
 console.log(vision);*/

 let filterStrength = heroes.filter(hero => hero.strength > 75000);
 console.log(filterStrength);

 let female= heroes.every(hero => hero.sex === " f");
 console.log(female);


   //For each : loops over like for of function.

   let colours =[ "red", "white", "blue"];
   colors.forEach(colour =>{
       console.log(colour)
   });

   //every returns boolen
   // some any or more returns true it will return true.

   let longerThan4 = colours.some(colour => colour.length >4);
   console.log(longerThan4);
   

