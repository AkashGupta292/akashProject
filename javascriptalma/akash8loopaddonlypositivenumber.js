// const arr= [1, 2, 3, -8, 8, 9, -7];
// let sum = 0;

// for(const num of arr) {
//  if (num> 0 && num%2==0) {
      
//     sum += num;
//   }
// }

// console.log(sum); // Output: 10 (2 + 8)


// array of numbers
const numbers = [5, -2, 10, 0, -3, 8, -1];

// variable to store the sum
let sum = 0;

// index variable for the while loop
let i = 0;

// Using a while loop, iterate through the array and add any positive numbers to the sum
while (i < numbers.length) {
  if (numbers[i] > 0) {
    sum += numbers[i];
  }
  i++;
}

// print the sum of positive numbers
console.log(sum);

// Output
23



