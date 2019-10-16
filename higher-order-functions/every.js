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
let areStrong = heroes.every(hero => hero.strenth >1);
console.log(areStrong);

let areMale = heroes.every(hero => hero.sex  === 'm');
console.log(areMale);

let arefemale = heroes.filter(hero => hero.sex === 'm');
console.log(arefemale);
let arefemale1 = heroes.every(hero=> arefemale.sex === 'm');
console.log(arefemale1);


let allFilteredMales = heroes.filter(hero => hero.sex === 'm').every(hero => hero.sex === 'm')
console.log(allFilteredMales);

function isMale(hero){
    return hero.sex === 'm';
}
let allFilteredMales1 = heroes.filter(isMale).every(isMale)
console.log(allFilteredMales1);

//============================================
/*let usernames = ['john 123', 'alex222'];

usernames.every(username => {
    let characters = username.split("");

    let loweCase = character.find(isLowerCase);

})*/

let names= ['alex', 'bob', 'amenda'];
names.filter(name => name[0]=== 'a');// let aNames =name => name[0] === 'a';
console.log(names);

names.filter(name => name[name.length -1]=== 'a');// ['amenda']
names.filter(name => {return true;})//gets all in the array// false - blank array

names.every(name => name.length > 2);

//map- way to map one value to another value
names.map(name => name.toUpperCase());// ['ALEX', 'BOB', 'AMENDA']
names.map(bacon => 1);// [1,1,1]
names.map(bacon => {return 1 + bacon});// ['1alex','1bob','1amenda']
names.map(bacon =>{return {name: becon}});//[{name:'alex', name: 'bob', name: 'amenda'}]
