

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
