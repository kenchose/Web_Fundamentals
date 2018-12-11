// Create a function that can take a start point, end point, and skip amount, to print all numbers in the range.
function rangePoint (start, end, amt) {
    for(var i = start; i < end; i += amt) {
        console.log(i);
    }
}