// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var nodeArg = process.argv;

var numArray = [];

for (var i = 2; i < nodeArg.length; i++) {

    numArray.push(parseFloat(nodeArg[i]));

}
//print original numbers
console.log(numArray);
// print the sorted numbers
console.log(numArray.sort(sortNums));
//this fxn is needed so JS sort fxn knows to sort in numeric order.
function sortNums(a, b) {
    return (a - b);
}