// program using switch statement
let value=123

// switch (typeof value) {
//   case 'string':
//     console.log('The value is a string');
//     break;
//   case 'number':
//     console.log('The value is a number');
//     break;
//   case 'boolean':
//     console.log('The value is a boolean');
//     break;
//   default:
//     console.log('The value is not a string, number, or boolean');
//     break;
// }

// Output
//"The value is a string"//
let dayOfWeek = 5;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  case 4:
    dayName = 'Thursday';
    break;
  case 5:
    dayName = 'Friday';
    break;
  case 6:
    dayName = 'Saturday';
    break;
  case 7:
    dayName = 'Sunday';
    break;
  default:
    dayName = 'Invalid day';
    break;
}

console.log(dayName); // Output: "Friday"