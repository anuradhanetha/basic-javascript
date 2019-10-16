
/*reduce
let nums = [2,3,4];//sum of numbers
let sum1 = 0;
for (let num of nums){
 sum1 += nums;
}

/*nums.reduce (function, starting value)//(0)
(prev, num)=> {
  return  prev + num;
}

let sum = nums.reduce((prev, curr)=> {
    return prev +curr;
}, 0);

let greatest = nums.reduce((prev, curr)=>{
    if( curr >prev){
        return curr;
    }
  else {
      return prev;
  }
},0);*/

const heroes = [
    { name: 'Hulk', strength: 90000, sex: 'm' },
    { name: 'Spider-Man', strength: 25000, sex: 'm' },
    { name: 'Hawk Eye', strength: 136, sex: 'm' },
    { name: 'Thor', strength: 100000, sex: 'm' },
    { name: 'Black Widow', strength: 136, sex: 'f' },
    { name: 'Vision', strength: 5000, sex: 'm' },
    { name: 'Scarlet Witch', strength: 60, sex: 'f' },
    { name: 'Mystique', strength: 120, sex: 'f' },
    { name: 'Namora', strength: 75000, sex: 'f' },
];

let strongest = heroes.reduce(
    (prev, curr) => {
        if (curr.strength > prev.strength) {
            return curr;
        }
        else {
            return prev;
        }

    }, { strength: 0 }
);
console.log(strongest);
// variable called total strength, use reduce to calculate the total strength of all of our heroes.

let totalStrength = heroes.reduce(
    (prev, curr) => {
        return prev + curr.strength;
    }, 0
);
console.log(totalStrength);

//count the number of female using reduce

let femaleCount = heroes.reduce(
    (prev, curr) => {
        if (curr.sex === 'f') {
            prev++;// return prev +1
        }
        return prev;
    }, 0

);
console.log(femaleCount);


/*let femaleCount1 = heroes.reduce(
    (prev, curr) => {
        if (curr.sex === 'f') {
            return prev + 1;
        }
        else {
            return prev;
        }
    });
let numFemalHeroes = heroes.reduce(myReducer, 0);
console.log(numFemalHeroes);*/


let num = [1,2,3];
let sum = num.reduce((prev, curr)=> {
return  prev+ curr;
},0)
console.log(sum);

let arrays = [[1,2,3],[4,5],[6]];
let flatArray = arrays.reduce((prev, curr)=> {
prev.push(...curr);// return prev.concat(curr);
return prev;// [1,2,3]
},[]);
console.log(flatArray);

/*let flatArray = arrays.reduce((prev, curr)=>prev.concat(curr), []);
let flatArray = arrays.reduce((prev, curr)=>{ return prev.concat(curr)}, []);
let flatArray = arrays.reduce((prev, curr)=>[... prev, ...curr], []),*/

let nums = [1,2,3,4];
let average= nums.reduce((prev, curr, index)=> {
if(index === nums.length-1){
    return (prev +curr)/nums.length
}
return prev +curr;
},)
console.log(average);

