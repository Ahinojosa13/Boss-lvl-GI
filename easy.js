// Write a function that would allow you to do this:

// var run = exercise('running');

// console.log(run()); // prints "Today's exercise: running"

// var swim = exercise('swimming');

// console.log(swim()); // prints "Today's exercise: swimming"


function exercise(type){
    return function(){
        return "Today's exercise:" + type;
    };
}

//  Decided to make const instead of Var because it will not change 
const run = exercise('running');
console.log(run()); // prints "Today's exercise: running"

const swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"
