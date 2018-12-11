// Normally, if you print an array such as ["James", "Jill", "Jane", "Jack"], you will see the following:

// [ "James", "Jill", "Jane", "Jack" ]
// Let's make it look fancy! Write a function that will make it print like:

// 0 -> James
// 1 -> Jill
// 2 -> Jane
// 3 -> Jack

function fancyArr() {
var arr = ["James", "Jill", "Jane", "Jack"];
  for (var i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
  }
}
fancyArr();