
function getFattestSquirrel(fat){
let result = 0;
for (let i = 0; i <= fat.length-1; i++){
    current = fat[i];
    if (current > result ){
        result = current;
    }
}
return result;
}
console.log(getFattestSquirrel([1,7,22,7,30,5]));
console.log(getFattestSquirrel([1,7,22,7,39,5]));
console.log(getFattestSquirrel([1,7,22,7,100,5]));

/*function getFattestSquirrel(squirrels){
    let fattest = 0;
    for (i = 0, i < squirrels.length; i++){
        let current = squirrels[i];
        if (current > fattest){
            fattest =current;
        }
    }
    return fattest;
}*/
/*function getFattestSquirrel(squirrels){
    return Math.max(...squirrels);*/
    hletas23 = nums => {
        if(nums[0] ===2 || nums[1]===2 || nums[0] ===3 || nums[1]===3){
            return true;
        }
        return false;
    }

  function countEvens(even){
let count = 0;
for ( i = 0; i <= even.length-1; i++){
 if (even[i] % 2 == 0){
      count++;
    }   
}
return count;
  }
    console.log(countEvens([2,1,3,4]));
    console.log(countEvens([2,2,0]));
    console.log(countEvens([1,3,5]));

    function countEvens(nums){
        let counter =0;
        for (let i = 0; i< nums.length; i++){
            let current = nums[i];
            if (current % 2 === 0){
                counter++;
            }
        }
        return counter;
    }
    console.log(countEvens([2,1,3,4]));
    console.log(countEvens([2,2,0]));
    console.log(countEvens([1,3,5]));
