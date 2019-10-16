const heroes = [
    {name: 'Hulk', strength: 90000, sex: 'm'},
    {name: 'Spider-Man', strength: 25000, sex: 'm'},
    {name: 'Hawk Eye', strength: 136, sex: 'm'},
    {name: 'Thor', strength: 100000, sex: 'm'},
    {name: 'Black Widow', strength: 136, sex: 'f'},
    {name: 'Vision', strength: 5000, sex: 'm'},
    {name: 'Scarlet Witch', strength: 60, sex: 'f'},
    {name: 'Mystique', strength: 120, sex: 'f'},
    {name: 'Namora', strength: 75000, sex: 'f'},
];
let heroes1 = heroes.map(hero =>  hero.name);//[all names]
console.log(heroes1);
//generate an array of heroes based off of the heroes array that adds a property to each 
//hero called isWeek. A hero has isWeek set to true if its strength is less than 500. A hero 
//has isWeek set to false if its strength is greater than or equal to 500

//let heroes2 = heroes.filter(hero => heroes).filter(hero => hero.strength < 500);
//console.log(heroes2);

//let newHeroes = heroes.map(hero =>{
  //  return hero;
//});// returns copy

let newHeroes = heroes.map(hero =>{
    if(hero.strength < 500){
        hero.isWeek =true;
    }
    else {
        hero.isWeek =false;
    }
    return hero;
});
console.log(newHeroes);

let ternaryHeroes = heroes.map(hero => {
    hero.isWeek = hero.strength < 500 ? true : false;
    return hero;
});
console.log(newHeroes);

//let ternaryHeroes = heroes.map(hero => {return {...hero, isWeek:hero.strength <500 ? true :false}});

function oodlify(word){
    return word.replace(/[aeiou]/g, 'oodle');
}
console.log(oodlify('paul'));

const beatles =['john', 'paul', 'george', 'ringo'];
let oodledBeatles = beatles.map(oodlify);
console.log(oodledBeatles);

for(let name of beatles){
    console.log(name);
  }
  
  for(let i =0; i< beatles.length; i++){
    let name = beatles[i];
    console.log(name);
  }

  let myObject = {name: "joe", age: 5, hair:" black"};
  for(let key in object){
      console.log(key);
      console.log(myobject[key]);
  }


  let name = 'george';
  let hasR = false;
  for(let letter of name.split("")){
      if(letter === 'r'){
          hasR = true;
      }
  }
  console.log(hasR);

  let name = 'george';
  let namesWithR= [];
  for(let beatle of beatles){
      let hasR= false;
      for (let letter of beatle.split("")){
          if(letter === "r"){
              hasR = true;
          }
          }
          if (hasR === true){
              namesWithR.push(beatle);
          }
      }
  console.log(namesWithR);

