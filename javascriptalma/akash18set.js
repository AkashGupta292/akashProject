const mySet = new Set();

mySet.add('apple');
mySet.add('banana');
mySet.add('orange');
mySet.add('apple');     // Ignored, as 'apple' is already in the Set
console.log(mySet);

mySet.delete('banana'); // Removes 'banana' from the Set
console.log(mySet);

mySet.clear();          // Removes all elements from a Set
console.log(mySet);

// Output
Set(3) { 'apple', 'banana', 'orange' }
Set(2) { 'apple', 'orange' }
Set(0) {}