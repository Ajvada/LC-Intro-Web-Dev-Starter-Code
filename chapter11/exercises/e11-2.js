//Create an anonymous fucntion and set it equal to a variable.
// let anon = function (n) {
//    if (typeof n === "number"){
//       return n * 3;
//    } else if
//       (typeof n === "string" ) {
//      return console.log("ARRR");
//    } else { 
//   return n
// } 
// };
// console.log(anon(vada)); 
/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. */
let anon = function (n) {
  if (typeof n === "number"){
     return n * 3;
  } else {
     (typeof n === "string")
    return "ARR"; 
    
  } 
};
let mapArr = arr.map(anon)

/* Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100]; 

console.log(mapArr) 