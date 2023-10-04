const targetObj = { name: "John" };
const sourceObj = { age: 30 };
Object.assign(targetObj, sourceObj);

console.log(Object.assign(targetObj, sourceObj));

// Output
// {
//   name: "John",
//   age: 30
// }
// console.log(sourceObj);