// // function checkNumber(number) {
//   if (number > 0) {
//     if (number % 2 === 0) {
//       console.log`("number is positive and even")
//     } else {
//       console.log("number is positive and odd")
//     }
//   } else if (number === 0) {
//     console.log("The number is zero")
//   } else {
//     console.log("numberis negative")
//   }



// Checks if Number is Positive or not. Also checks it the number is even or odd.
// const num = 10;
// if (num > 0) {
//   console.log("The number is positive");
//   if (num % 2 === 0) {
//     console.log("The number is even");
//   } else {
//     console.log("The number is odd");
//   }
// } else {
//   console.log("The number is not positive");
// }
let fruit = 'orange';
let color;

switch (fruit) {
  case 'banana':
  case 'lemon':
    color = 'yellow';
    break;
  case 'apple':
  case 'cherry':
  case 'strawberry':
    color = 'red';
    break;
  case 'grape':
  case 'blueberry':
    color = 'purple';
    break;
  default:
    color = 'unknown';
    break;
}

console.log(color); // Output: "unknown"