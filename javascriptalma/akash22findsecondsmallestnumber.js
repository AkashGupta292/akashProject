

// let studentsData = [['Ryan', 24], ['Sara', 27]];

// // looping outer array elements
// for(let i = 0; i < studentsData.length; i++){

//     // gives the length of the inner array elements
//     let innerArrayLength = studentsData[i].length;

//     // looping inner array elements
//     for(let j = 0; j < innerArrayLength; j++) {
//         console.log(studentsData[i][j]);
//     }
// }



    
  
  
  
// function reverseString(str) {
    
//     return str.split('').reverse().join('');
//   }
  
  
//   const originalString = "Hello, World!";
//   const reversedString = reverseString(originalString);
//   console.log(reversedString); 


    
    

function reverseWords(sentence) {
  
  
    const wordsArray = sentence.split(" ");
    return wordsArray.reverse().join(" ");
  }
  
  
  function findSecondSmallest(arr) {
    if (arr.length < 2) {
        console.log("Array should have at least two elements.");
        return;
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }
  
    if (secondSmallest === Infinity) {
        console.log("There is no second smallest number.");
    } else {
        console.log("The second smallest number is: " + secondSmallest);
    }
  }
  
  var numbers = [2, 1, 4, 67, 3];
  findSecondSmallest(numbers);
  