// Create a program that will tell you the time.

// With the following variables...

// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";
// ...your program should print "It's almost 9 in the morning"

// And when changed to...

// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";
// ...your program should print "It's just after 7 in the evening"

// Challenge:
// If minutes less than 30, "just after" the hour, more than 30, "almost" the next hour
// AM / PM, "in the morning", "in the evening",



var pm = " in the evening";
var am = " in the morning";
function time (hour, min, period) {
  if (min < 30) {
    console.log("It's " + min + " mins just after " + hour + period + ".");
  }
  if (min > 30) {
    hour++;
    console.log("It's almost " + hour + period + ".");
  }
}
time();