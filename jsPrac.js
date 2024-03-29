function repeat(word,n){
for(let i = 0; i < n; i++){
    console.log(word);
}
    
}

console.log(repeat("five",5));

function hello(){
    console.log("Hello world!");
}

function goodbye(){
    console.log("Goodbye world!");
}

repeat(hello(),5);
repeat(goodbye(), 5);


function filter(arr, fn) {
    let newArray = [];
    for(let i in arr){
        if(fn === arr[i]){
            newArray.push(arr[i]);
        }
    } return newArray;
    
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES