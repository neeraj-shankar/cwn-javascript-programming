About Classes 
-----------------------------------------------------------------------------------------------------------------------
In JavaScript, classes are a way to create objects with shared properties and methods. 
They provide a blueprint for creating objects

JavaScript classes were introduced in ECMAScript 6 (ES6), making object-oriented programming in JavaScript 
more structured and intuitive.

Class Declaration:
-----------------------------------------------------------
example:
-----------------------------------------------------------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person('John', 30);
person1.greet(); // Output: "Hello, my name is John and I am 30 years old."

Constructor Method:
-----------------------------------------------------------
The constructor is a special method within a class that is executed when a new instance of the class is created


Instance Methods:
-----------------------------------------------------------
1. Instance methods are functions defined within a class that can be called on instances of the class. 
2. These methods can access and manipulate instance-specific data.

Instance Properties:
-----------------------------------------------------------
1. Instance properties are variables that belong to an instance of the class. 
2. These properties are defined within the constructor or other methods and are unique to each instance.


Static Methods:
-----------------------------------------------------------
1. Static methods are methods that belong to the class itself, rather than its instances
2. They are called on the class, not on instances.
3. Static methods are often used for utility functions that are not tied to instance-specific data.


Super Keyword:
-----------------------------------------------------------
1. The super keyword is used to call the constructor of the parent class in a subclass. 
2. It can also be used to call parent class methods.
