let chars = ["d", "c", "b" ]

chars.sort();

let nums =[ 1,2, 3,1000,4];
nums.sort();

nums.sort((firstElem, secondElem)=> {
    if(firstElem < secondElem){
    return -1;
}
else if(firstElem === secondElem){
    return 0;
}
else {
    return 1;
}
});

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
heroes.sort();

heroes.sort((firstHero, secondHero) => {
    if(firstHero.name < secondHero.name){
        return -1
    }
    else if(firstHero.name === secondHero.name){
        return 0;
    }
    else {
        return 1;
    }
})

heroes.sort((firstHero, secondHero) =>
firstHero.strength - seconmdhero.strength);