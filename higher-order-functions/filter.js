const heroes = require("./heroes.js");
let femaleHeroes = heroes.filter(hero => hero.sex === 'f');
console.log(femaleHeroes);

let herostrength = heroes.filter(hero => hero.strength > 10000);
console.log(herostrength);
