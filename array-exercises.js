


function sum(array) {
    let a = array[0];
    let b = array[1];
    let c = array[2];
    return a + b + c;
}
console.log(sum([1, 2, 3]));
console.log(sum([5, 11, 2]));
console.log(sum([7, 0, 0]));

function sum3(nums) {
    let sum = nums[0] + nums[1] + nums[3];
    return sum3;
}
console.log(sum([1, 2, 3]));
console.log(sum([5, 11, 2]));
console.log(sum([7, 0, 0]));

function makeEndsMeet(miss) {
    let first = miss[0];
    let last = miss[miss.length - 1];
    let a = [];
    //let a = [first, last];
    // a.push(first,last);
    // let makeEndsMeet = miss => [miss[0], miss[miss.length-1]];
    a.push(first);
    a.push(last);
    return a;
}
console.log(makeEndsMeet([1, 2, 3]));
console.log(makeEndsMeet([1, 2, 3, 4]));
console.log(makeEndsMeet([7, 4, 6, 2]));

function has23(array) {
    let first = array[0];
    let last = array[array.length - 1];
    if (first == 2 || first == 3) {
        return true;
    } else if (last == 2 || last == 3) {
        return true;
    } else {
        return false;
    }
}
console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));

hletas23 = nums => {
    if (nums[0] === 2 || nums[1] === 2 || nums[0] === 3 || nums[1] === 3) {
        return true;
    }
    return false;
}
console.log(has23([2, 5]));
console.log(has23([4, 3]));
console.log(has23([4, 5]));





//let arr =["h", "p"];
//const testObjs = arr.map(taskType =>({test: taskType}));
//console.log(testObjs);


let arr =["h", "p"];
let testObjs = arr.reduce((prev, curr)=>{
    let obj= {test: curr};
    prev.push(obj);
    return prev;
}, []);
console.log(testObjs);