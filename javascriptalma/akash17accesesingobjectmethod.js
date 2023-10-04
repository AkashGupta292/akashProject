// const person = {
//     name: "John",
//     age: 30,
//     greet: function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
//   };
  
  // Accessing Object Property
  //console.log(person.name);
  
  // Accessing Object Method
 // person.greet();
  
  // Output
 // "John"
 // "Hello, my name is John and I am 30 years old."


 // use of this

 // Define an object called "person"
// let person = {
//     name: "Rocky",
//     age: 30,
//     sayHello: function() {
//       console.log("Hello, my name is " + this.name + "."); // Accessing the "name" property using "this"
//     }
//   };
  
 // person.sayHello(); // Calling the "sayHello" method on the "person" object
  
  // Output
  "The name is Rocky"

  const person = {
    name: 'John',
    age: 30,
    greet: function() {
      let surname = 'Doe';
      console.log('The name is' + ' ' + this.name + ' ' + surname);
    }
  };
  
  person.greet();
  
  // Output
  "The name is John Doe"