function oddOrEvenSum(numbers) {
    // Initialize variables to store the sum of odd and even numbers
    let oddSum = 0;
    let evenSum = 0;
  
    // Iterate through the array of numbers
    for (let i = 0; i < numbers.length; i++) {
      // Check if the current number is even or odd
      if (numbers[i] % 2 === 0) {
        // If even, add it to the evenSum
        evenSum += numbers[i];
      } else {
        // If odd, add it to the oddSum
        oddSum += numbers[i];
      }
    }
  
    // Create an object to store the results
    const result = {
      odd: oddSum,
      even: evenSum,
    };
  
    // Return the result object
    return result;
  }
  
  // Example usage:
  const numbersArray = [1, 2, 3, 4, 5, 6];
  const resultObject = oddOrEvenSum(numbersArray);
  console.log(resultObject); // Output: { odd: 9, even: 12 }
  